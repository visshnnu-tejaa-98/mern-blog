import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './About.css';
const About = () => {
	return (
		<div className='about'>
			<Navbar />
			<header>
				<div class=' about-bannar'></div>
				<div class='bannar-overlay d-flex align-items-center d-flex justify-content-center'>
					<div class=' '>
						<p class='bannar-heading bold'>About Me</p>
						<p class='bannar-description container width'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium aspernatur
							deserunt asperiores tempora reiciendis, officia sequi vel modi eveniet voluptates.
						</p>
					</div>
				</div>
				<div class='divider'></div>
			</header>
			<Footer />
		</div>
	);
};

export default About;
