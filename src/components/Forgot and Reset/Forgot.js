import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_ENDPOINT } from '../endpoint';
import '../Login/Login.css';
const Forgot = () => {
	const [email, setEmail] = useState('');
	const getData = async () => {
		if (email) {
			let data = { email };
			console.log(data);
			let req = await fetch(`${BACKEND_ENDPOINT}/forgot`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
		} else {
			alert('Input filed should not be empty');
		}
	};
	return (
		<div className='newPost'>
			<div className='container form-container pb-5'>
				<div className=' form-middle'>
					<p className='postContent'>Enter Email Here</p>

					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							id='email'
							name='email'
							placeholder='Email'
							value={email}
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<br />
					<small className='text-warning'>check your mail to get reset password link *</small>
					<br />
					<br />
					{/* <Link to='/'> */}
					<button type='button' className='new-post form-submit-btn bold button' onClick={getData}>
						Send Email
					</button>
					{/* </Link> */}
				</div>
			</div>
		</div>
	);
};

export default Forgot;
