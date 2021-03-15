import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
	return (
		<div className='newPost'>
			<div className='container form-container pb-5'>
				<div className=' form-middle'>
					<p className='postContent'>Register Here</p>
					<div className='form-group'>
						<input type='text' className='form-control' id='name' name='name' placeholder='Name' />
					</div>
					<br />
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
					<small className='small'>
						already have an account?
						<Link to='/login'>
							<small className='text-info h6'> Login here</small>
						</Link>
					</small>
					<br />
					<br />
					<Link to='/login'>
						<button type='button' className='new-post form-submit-btn bold button'>
							Register
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;
