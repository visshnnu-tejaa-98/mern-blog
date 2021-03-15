import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Post from '../Post/Post';
import './Home.css';

const Home = () => {
	return (
		<div className='home'>
			<Navbar />
			<header className='mb-5'>
				<div className='bannar '></div>
				<div className='bannar-overlay d-flex align-items-center d-flex justify-content-center'>
					<div className=' '>
						<p className='bannar-heading bold'>Clean Blog</p>
						<p className='bannar-description'>Blog Theme by Start Bootstrap</p>
					</div>
				</div>
			</header>
			<div className=' divider-special'></div>
			<Post />
			<Post />
			<Post />
			<Footer />
		</div>
	);
};

export default Home;
