import React from 'react';
import './Services.css';
import fluoride from '../../images/fluoride.png';
import cavity from '../../images/cavity.png';
import whitening from '../../images/whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
const serviceData = [
	{
		name: 'Fluoride Treatment',
		img: fluoride,
	},
	{
		name: 'Cavity Filling',
		img: cavity,
	},
	{
		name: 'Teeth Whitening',
		img: whitening,
	},
];

const Services = () => {
	return (
		<section className='services-container mt-5'>
			<div className='text-center'>
				<h5 className='service-h5'>OUR SERVICES</h5>
				<h2>Services We Provide</h2>
			</div>
			<div className='d-flex justify-content-center'>
				<div className='w-75 row mt-5 pt-5'>
					{serviceData.map((serviceData) => (
						<ServiceDetails serviceData={serviceData}></ServiceDetails>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
