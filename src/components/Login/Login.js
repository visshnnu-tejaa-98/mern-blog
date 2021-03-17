import { Link } from 'react-router-dom';
import './Login.css';
const Register = () => {
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
						/>
						<br />
					</div>
					<div className='form-group'>
						<input type='password' className='form-control' id='password' placeholder='Password' />
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
					<Link to='/'>
						<button type='button' className='new-post form-submit-btn bold button'>
							Login
						</button>
					</Link>
					<br />
				</div>
			</div>
		</div>
	);
};

export default Register;
