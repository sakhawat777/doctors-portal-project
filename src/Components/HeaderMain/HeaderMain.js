import React from 'react';
import chair from '../../images/chair.png';
const HeaderMain = () => {
	return (
		<main className='row'>
			<div className='col-md-4 offset-md-1'>
				<h1>
					Your New Smile <br /> Starts Here
				</h1>
				<p className='text-secondary'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry’s standard dummy text
					ever since the
				</p>
				<button className='btn btn-primary'>GET APPOINTMENT</button>
			</div>
			<div className='col-md-6'>
				<img src={chair} alt='' className='img-fluid' />
			</div>
		</main>
	);
};

export default HeaderMain;
