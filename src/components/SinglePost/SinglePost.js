import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './SinglePost.css';

const SinglePost = () => {
	return (
		<div className='singlePost'>
			<Link to='/'>
				<div className='backButton '>
					<i className='fas fa-arrow-left'></i>
				</div>
			</Link>
			<div className='singlepost-bannar'></div>
			<div className='singlepost-bannar-overlay'>
				<div className='post-data '>
					<p className='post-title d-flex justify-content-center'>This is a Zomato Post</p>
					<p className='post-subtitle d-flex justify-content-center'>Zomato Incident</p>
					<p className='post-date d-flex justify-content-center'>March 16, 2021</p>
				</div>
			</div>
			<div className='post-message'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deserunt itaque quod
					praesentium sunt nisi nesciunt. Molestiae, aliquid qui. Culpa accusamus, dicta reiciendis
					unde repudiandae doloribus neque reprehenderit quam error impedit nam porro saepe odit
					adipisci officiis, facilis nobis dolor nulla nostrum explicabo similique atque suscipit?
					Modi aperiam incidunt error quae ut temporibus vel maxime. Quis placeat pariatur alias,
					vel quo distinctio dolore neque! Quis optio ullam architecto eius sint esse odit, itaque
					consequuntur suscipit officiis, temporibus commodi perferendis nihil deserunt facere
					accusamus rem nemo tempore ex doloribus iure amet assumenda a et. Quidem, amet odio.
					Labore quisquam velit nihil!
				</p>
			</div>
			<button type='button' className='button editpostbtn mb-5'>
				Edit post
			</button>
			<Footer />
		</div>
	);
};

export default SinglePost;
