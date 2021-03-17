import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BACKEND_ENDPOINT, FRONTEND_ENDPOINT } from '../endpoint';
import './Register.css';
const Register = () => {
	const history = useHistory();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const getData = async () => {
		if (name && email && password) {
			const data = { name, email, password };
			console.log(data);
			console.log(BACKEND_ENDPOINT);
			let req = await fetch(`${BACKEND_ENDPOINT}/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'Application/json',
				},
				body: JSON.stringify(data),
			});
			window.location.href = `${FRONTEND_ENDPOINT}/login`;
			// window.location.href = 'http://localhost:3001/login';
			console.log(window.location.href);
		} else {
			alert('Input Fields should not be empty');
		}
	};

	return (
		<div className='newPost'>
			<div className='container form-container pb-5'>
				<div className=' form-middle'>
					<p className='postContent'>Register Here</p>
					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							id='name'
							name='name'
							placeholder='Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<br />
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
					<small className='small'>
						already have an account?
						<Link to='/login'>
							<small className='text-info h6'> Login here</small>
						</Link>
					</small>
					<br />
					<br />
					{/* <Link to=''> */}
					<button type='button' className='new-post form-submit-btn bold button' onClick={getData}>
						Register
					</button>
					{/* </Link> */}
				</div>
			</div>
		</div>
	);
};

export default Register;
