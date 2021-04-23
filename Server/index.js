const express = require('express');
const cors = require('cors');
const BodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
const fileUpload = require('express-fileupload');

const app = express();
app.use(cors());
app.use(BodyParser.json());
app.use(express.static('doctors'));
app.use(fileUpload());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.v9ypd.mongodb.net/${process.env
	.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
	const doctorCollection = client.db('doctorsPortal').collection('doctors');
	const appointmentCollection = client.db('doctorsPortal').collection('appointments');
	const reviewCollection = client.db('doctorsPortal').collection('reviews');

	console.log('Doctors Portal DataBase Connected');

	//Routes -- Get method
	// Root Route
	app.get('/', (req, res) => res.send('Welcome to Doctors Portal Backed'));

	// Get all services Information
	app.get('/doctors', (req, res) => {
		doctorCollection.find({}).toArray((err, documents) => {
			res.send(documents);
		});
	});

	// Get all Booked Appointments
	app.get('/bookedAppointments', (req, res) => {
		appointmentCollection.find({}).toArray((err, documents) => {
			res.send(documents);
		});
	});

	// Get all Reviews
	app.get('/allReviews', (req, res) => {
		reviewCollection.find({}).toArray((err, documents) => {
			res.send(documents);
		});
	});

	//Routes -- Post method
	// Added all doctors Information
	app.post('/addDoctor', (req, res) => {
		const doctorData = req.body;
		doctorCollection.insertMany(doctorData).then((result) => {
			console.log(result.insertedCount, 'All Data Inserted');
			res.send(result.insertedCount);
		});
	});

	// Insert Appointment Booking
	app.post('/makeBooking', (req, res) => {
		const appointmentData = req.body;
		appointmentCollection.insertOne(appointmentData, (err, result) => {
			console.log(result.insertedCount, 'Appointment Inserted');
			res.send(result.insertedCount > 0);
		});
	});

	// Insert A New Doctor

	//Routes -- Update method
	// Updating Booking Status
	

	// Updating Appointment Date/Time
	



	// Updating Appointment Visiting Status
	app.post('/updateVisitingStatus', (req, res) => {
		const ap = req.body;
		appointmentCollection.updateOne(
			{ _id: ObjectId(ap.id) },
			{
				$set: { visitingStatus: ap.visitingStatus },
				$currentDate: { lastModified: true }
			},
			(err, result) => {
				if (err) {
					console.log(err);
					res.status(500).send({ message: err });
				} else {
					res.send(result.modifiedCount > 0);
					console.log(result.modifiedCount, 'Update Visiting Status');
				}
			}
		);
	});



	// Updating Disease
	app.post('/updateDisease', (req, res) => {
		const ap = req.body;
		appointmentCollection.updateOne(
			{ _id: ObjectId(ap.id) },
			{
				$set: { disease: ap.problem },
				$currentDate: { lastModified: true }
			},
			(err, result) => {
				if (err) {
					console.log(err);
					res.status(500).send({ message: err });
				} else {
					res.send(result.modifiedCount > 0);
					console.log(result.modifiedCount, 'Update Disease');
				}
			}
		);
	});



});

const port = process.env.PORT || 5000;
app.listen(port, (err) => (err ? console.log('Filed to Listen on Port', port) : console.log('Listing for Port', port)));
