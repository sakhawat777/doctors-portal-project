import React from 'react';
import './ServiceDetails.css';
const ServiceDetails = ({ serviceData }) => {
	return (
		<div className='col-md-4 service-detail text-center'>
			<img className='service-detail-img' src={serviceData.img} alt='' />
			<h5 className='mt-3 mb-3'>{serviceData.name}</h5>
			<p className='text-secondary'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
				animi.
			</p>
		</div>
	);
};

export default ServiceDetails;
