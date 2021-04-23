import React, { } from 'react';
import '../../App.css';
import Sidebar from '../../Components/Dashboard/Sidebar';

const AddDoctor = () => {

	return (
		<section className="container-fluid row" style={{ backgroundColor: '#F4FDFB' }}>
			<Sidebar />
			<div id="responsive-dashboard" className="col-md-10 p-4 doctorForm" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
				<h5 className="text-brand mb-4"> Coming Soon....</h5>
				
			</div>
		</section>
	);
};

export default AddDoctor;
