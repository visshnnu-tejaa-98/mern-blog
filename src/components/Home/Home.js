import { Link } from 'react-router-dom';

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
						<p className='bannar-heading bold'>Tech Blogs</p>
						<p className='bannar-description'>Where you get all News about Tech</p>
					</div>
				</div>
			</header>
			<div className=' divider-special'></div>
			<div className='strip' id='strip'>
				<p className='bold'>
					<Link to='/login'>TRY LOGING IN</Link>
				</p>
			</div>
			<Post />
			<Post />
			<Post />
			<Footer />
		</div>
	);
};

export default Home;
