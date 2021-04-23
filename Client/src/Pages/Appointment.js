import React, { useEffect } from 'react';
import '../App.css';
import AppointmentSection from '../Components/Appointment/AppointmentSection';
import AppointmentTable from '../Components/Appointment/AppointmentTable';

import Header from '../Components/Header/Header';

const Appointment = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="heder-content">
			<Header />	
			<AppointmentSection />
            <AppointmentTable/>
       
		</div>
	);
};

export default Appointment;
