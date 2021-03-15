import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './About.css';
const About = () => {
	return (
		<div className='about'>
			<Navbar />
			<header>
				<div className=' about-bannar'></div>
				<div className='bannar-overlay d-flex align-items-center d-flex justify-content-center'>
					<div className=' '>
						<p className='bannar-heading bold'>About Me</p>
						<p className='bannar-description container width'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium aspernatur
							deserunt asperiores tempora reiciendis, officia sequi vel modi eveniet voluptates.
						</p>
					</div>
				</div>
				<div className='divider'></div>
			</header>
			<Footer />
		</div>
	);
};

export default About;
