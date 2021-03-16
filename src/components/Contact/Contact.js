import { Link } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
const Contact = () => {
	return (
		<div className='contactpage'>
			<Navbar />

			<div className='newPost'>
				<div className='container form-container pb-5'>
					<div className=' form-middle'>
						<p className='postContent'>Contact Here</p>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								id='name'
								name='name'
								placeholder='Name'
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
							/>
							<br />
						</div>

						<div className='form-group'>
							<textarea
								name='message'
								id='message'
								className='form-control'
								rows='4'
								placeholder='Messgage'
							></textarea>
						</div>
						<br />

						<br />
						<br />
						<Link to='/'>
							<button type='button' className='new-post form-submit-btn bold button'>
								Send
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
