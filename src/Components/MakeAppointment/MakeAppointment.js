import React from 'react';
import doctor from '../../images/doctor.png';
import './MakeAppointment.css';
const MakeAppointment = () => {
	return (
		<section className='make-appointment'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-5 d-none d-md-block'>
						<img className='img-fluid' src={doctor} alt='' />
					</div>
					<div className='col-md-7 text-white py-5'>
						<h5 className='appointment-h5 text-uppercase'>APPOINTMENT</h5>
						<h1 className='my-4'>
							Make an appointment <br /> Today
						</h1>
						<p className='text-white'>
							It is a long established fact that a reader will be
							distractedby the readable <br /> content of a page when
							looking at its
						</p>
						<button className='btn btn-primary'>Learn More</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MakeAppointment;
