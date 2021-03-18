import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_ENDPOINT, FRONTEND_ENDPOINT } from '../endpoint';
import '../NewPost/NewPost.css';
const EditPost = () => {
	const [heading, setHeading] = useState('');
	const [subHeading, setSubHeading] = useState('');
	const [url, setUrl] = useState('');
	const [body, setBody] = useState('');
	const [run, setRun] = useState(true);
	const getSinglePostData = async () => {
		let url = window.location.href.split('/');
		let id = url[url.length - 1];
		let req = await fetch(`${BACKEND_ENDPOINT}/blogs/${id}`, {
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
		let res = await req.json();
		console.log(res);
		setBody(res.body);
		setHeading(res.heading);
		setSubHeading(res.subHeading);
		setUrl(res.url);
	};
	if (run) {
		getSinglePostData();
		setRun(false);
	}
	const getData = async () => {
		if (heading && subHeading && url && body) {
			let windowUrl = window.location.href.split('/');
			let id = windowUrl[windowUrl.length - 1];
			let data = { heading, subHeading, url, body };
			console.log(data);
			let req = await fetch(`${BACKEND_ENDPOINT}/blogs/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					authorization: localStorage.getItem('token'),
				},
				body: JSON.stringify(data),
			});
			window.location.href = `${FRONTEND_ENDPOINT}`;
		} else {
			alert('Input fields should not be empty');
		}
	};

	return (
		<div className='newPost'>
			<div>
				<div className='container form-container pb-5'>
					<div className=' form-middle'>
						<p className='postContent'>Edit Post</p>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								id='heading'
								name='heading'
								placeholder='Post Heading'
								value={heading}
								onChange={(e) => {
									setHeading(e.target.value);
								}}
								required
							/>
						</div>
						<br />
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								id='subheading'
								name='subheading'
								placeholder='Post Subheading'
								value={subHeading}
								onChange={(e) => setSubHeading(e.target.value)}
								required
							/>
							<br />
						</div>
						<div className='form-group'>
							<input
								type='url'
								className='form-control'
								id='bg-url'
								placeholder='Post background image (enter url)'
								value={url}
								onChange={(e) => setUrl(e.target.value)}
								required
							/>

							<small id='bg-ur' className='form-text text-light'>
								Use an image URL (ex. https://source.unsplash.com/WLUHO9A_xik/1600x900)
							</small>
							<br />
							<br />
						</div>
						<div className='form-group'>
							<textarea
								name='postdiscription'
								id='postdiscription'
								className='form-control'
								rows='3'
								placeholder='Post Body Text'
								value={body}
								onChange={(e) => setBody(e.target.value)}
								required
							></textarea>
						</div>
						<br />
						<br />
						<Link to='/'>
							<button
								type='button'
								className='new-post form-submit-btn bold button'
								onClick={getData}
							>
								Edit post
							</button>
						</Link>
						{/* <p>Post Content</p>
						<div className='form-control form-preview hidden'>
							<h3 className='preview-text' id='preview-text'></h3>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditPost;
