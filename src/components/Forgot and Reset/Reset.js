import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_ENDPOINT, FRONTEND_ENDPOINT } from '../endpoint';
const Reset = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const getData = async () => {
		if (email && password) {
			let data = { email, password };
			console.log(data);
			let req = await fetch(`${BACKEND_ENDPOINT}/reset`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			window.location.href = `${FRONTEND_ENDPOINT}/login`;
		} else {
			alert('Input field should not be empty');
		}
	};
	return (
		<div className='newPost'>
			<div className='container form-container pb-5'>
				<div className=' form-middle'>
					<p className='postContent'>Reset Password Here</p>
					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							id='email'
							name='email'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<br />
					</div>
					<div className='form-group'>
						<input
							type='password'
							className='form-control'
							id='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<br />
					<br />
					{/* <Link to='/'> */}
					<button type='button' className='new-post form-submit-btn bold button' onClick={getData}>
						Login
					</button>
					{/* </Link> */}
				</div>
			</div>
		</div>
	);
};

export default Reset;
