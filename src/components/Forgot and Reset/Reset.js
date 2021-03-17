import { Link } from 'react-router-dom';
const Reset = () => {
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
						/>
						<br />
					</div>
					<div className='form-group'>
						<input type='password' className='form-control' id='password' placeholder='Password' />
					</div>
					<br />
					<br />
					<Link to='/'>
						<button type='button' className='new-post form-submit-btn bold button'>
							Login
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Reset;
