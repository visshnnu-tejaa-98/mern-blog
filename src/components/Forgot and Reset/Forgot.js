import { Link } from 'react-router-dom';
import '../Login/Login.css';
const Forgot = () => {
	return (
		<div className='newPost'>
			<div className='container form-container pb-5'>
				<div className=' form-middle'>
					<p className='postContent'>Emter Email Here</p>

					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							id='email'
							name='email'
							placeholder='Email'
						/>
					</div>

					<br />
					<Link to='/'>
						<button type='button' className='new-post form-submit-btn bold button'>
							Send Email
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Forgot;
