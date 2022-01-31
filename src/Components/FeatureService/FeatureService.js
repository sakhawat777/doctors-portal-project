import React from 'react';
import treatment from '../../images/treatment.png';
import './FeatureService.css';
const FeatureService = () => {
	return (
		<section className='feature-service'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-5'>
						<img className='img-fluid' src={treatment} alt='' />
					</div>
					<div className='col-md-7 align-self-center'>
						<h1>
							Exceptional Dental <br /> Care, on Your Terms
						</h1>
						<p className='text-secondary my-5'>
							It is a long established fact that a reader will be
							distracted by the readable content of a page when looking
							at its layout. The point of using Lorem Ipsumis that it has
							a more-or-less normal distribution of letters,as opposed to
							using ‘Content here, content here’, making it look like
							readable English. Many desktop publishing packages and web
							page
						</p>
						<button className='btn btn-primary'>Learn More</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeatureService;
