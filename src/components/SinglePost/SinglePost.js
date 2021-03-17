import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './SinglePost.css';
import { BACKEND_ENDPOINT, FRONTEND_ENDPOINT } from '../endpoint';

const SinglePost = () => {
	const [post, setPost] = useState('');

	const getData = async () => {
		let url = window.location.href.split('/');
		let id = url[url.length - 1];
		const req = await fetch(`${BACKEND_ENDPOINT}/blogs/${id}`, {
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
		const res = await req.json();
		setPost(res);
	};
	getData();
	const handleEdit = async () => {
		let url = window.location.href.split('/');
		let id = url[url.length - 1];
		window.location.href = `${FRONTEND_ENDPOINT}/editpost/${id}`;
	};
	const handleDelete = async () => {
		let url = window.location.href.split('/');
		let id = url[url.length - 1];
		let req = await fetch(`${BACKEND_ENDPOINT}/blogs/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				authorization: localStorage.getItem('token'),
			},
		});
		window.location.href = `${FRONTEND_ENDPOINT}`;
	};
	return (
		<div className='singlePost'>
			<Link to='/'>
				<div className='backButton '>
					<i className='fas fa-arrow-left'></i>
				</div>
			</Link>
			{!post && <h1 className='text-center mt-5'>Loading...</h1>}

			{post && (
				<div className='singlepost-bannar'>
					<img src={post.url} alt='' />
				</div>
			)}
			{post && (
				<div className='singlepost-bannar-overlay'>
					<div className='post-data '>
						<p className='post-title d-flex justify-content-center'>{post.heading}</p>
						<p className='post-subtitle d-flex justify-content-center'>{post.subHeading}</p>
						<p className='post-date d-flex justify-content-center'>
							{post.date && post.date.split('T')[0].split('-').reverse().join('-')}
						</p>
					</div>
				</div>
			)}
			{post && (
				<div className='post-message'>
					<p>{post.body}</p>
				</div>
			)}
			{post && (
				<button type='button' className='button editpostbtn mb-5' onClick={handleEdit}>
					Edit post
				</button>
			)}
			{post && (
				<button type='button' className='button editpostbtn mb-5 ' onClick={handleDelete}>
					Delete
				</button>
			)}

			{post && <Footer />}
		</div>
	);
};

export default SinglePost;
