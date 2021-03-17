import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_ENDPOINT, FRONTEND_ENDPOINT } from '../endpoint';
import './Login.css';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const getData = async () => {
		if (email && password) {
			let data = { email, password };
			console.log(data);
			let req = await fetch(`${BACKEND_ENDPOINT}/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			let res = await req.json();
			if (res.token) {
				localStorage.setItem('token', res.token);
			}
			console.log('response:::' + res);
			window.location.href = FRONTEND_ENDPOINT;
		} else {
			alert('Input fields should not be empty');
		}
	};
	return (
		<div className='newPost'>
			<div className='container form-container pb-5'>
				<div className=' form-middle'>
					<p className='postContent'>Login Here</p>
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
						<br />
					</div>
					<div className='form-group'>
						<input
							type='password'
							className='form-control'
							id='password'
							placeholder='Password'
							value={password}
							required
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<br />
					<div className='d-flex justify-content-between'>
						<small className='small'>
							don't have an account?
							<Link to='/register'>
								<small className='text-info h6'> Register here</small>
							</Link>
						</small>
						<small className='small'>
							<Link to='/forgot'>
								<small className='text-info h6'>Forgot Password?</small>
							</Link>
						</small>
					</div>

					<br />
					<br />
					{/* <Link to='/'> */}
					<button type='button' className='new-post form-submit-btn bold button' onClick={getData}>
						Login
					</button>
					{/* </Link> */}
					<br />
				</div>
			</div>
		</div>
	);
};

export default Login;
