import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Post from '../Post/Post';
import { BACKEND_ENDPOINT } from '../endpoint';
import './Home.css';

const MyPosts = () => {
	const [posts, setPosts] = useState([]);

	const token = localStorage.getItem('token');
	let getData = async () => {
		let req = await fetch(`${BACKEND_ENDPOINT}/myblogs`, {
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
		let res = await req.json();
		setPosts(res);
	};
	getData();

	return (
		<div className='home'>
			<Navbar />
			<header className='mb-5'>
				<div className='bannar '></div>
				<div className='bannar-overlay d-flex align-items-center d-flex justify-content-center'>
					<div className=' '>
						<p className='bannar-heading bold'>My Blogs</p>
						<p className='bannar-description'>Where you get all News about Tech</p>
					</div>
				</div>
			</header>
			<div className=' divider-special'></div>
			{!posts ? <h1>Loading...</h1> : null}
			{posts && token ? (
				posts.map((post) => (
					<Link to={`/singlepost/${post._id}`} className='post-link'>
						<Post
							key={post._id}
							heading={post.heading}
							subHeading={post.subHeading}
							url={post.url}
							email={post.email}
							body={post.body}
							date={post.date}
						/>
					</Link>
				))
			) : (
				<div className='post'>
					<h2>Heading</h2>
					<h3>Sub heading</h3>
					<p className='p'>March 18 2021</p>
				</div>
			)}

			<Footer />
		</div>
	);
};

export default MyPosts;
