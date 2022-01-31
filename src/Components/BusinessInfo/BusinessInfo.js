import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import {
	faClock,
	faMapMarkerAlt,
	faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';
const infoData = [
	{
		title: 'Opening Hours',
		description: 'We are open 7 days',
		icon: faClock,
		background: 'primary',
	},
	{
		title: 'Visit Our Location',
		description: 'Brooklyn, NY 10036, USA',
		icon: faMapMarkerAlt,
		background: 'dark',
	},
	{
		title: 'Contact us now',
		description: '+000 123 456789',
		icon: faPhoneVolume,
		background: 'primary',
	},
];
const BusinessInfo = () => {
	return (
		<section className='d-flex justify-content-center'>
			<div className='w-75 row'>
				{infoData.map((info) => (
					<InfoCard info={info}></InfoCard>
				))}
			</div>
		</section>
	);
};

export default BusinessInfo;
