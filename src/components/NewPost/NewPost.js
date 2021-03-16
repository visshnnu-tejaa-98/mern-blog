import { Link } from 'react-router-dom';
import './NewPost.css';
const NewPost = () => {
	return (
		<div className='newPost'>
			<div>
				<div className='container form-container pb-5'>
					<div className=' form-middle'>
						<p className='postContent'>Post Content</p>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								id='heading'
								name='heading'
								placeholder='Post Heading'
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
							/>
							<br />
						</div>
						<div className='form-group'>
							<input
								type='url'
								className='form-control'
								id='bg-url'
								placeholder='Post background image (enter url)'
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
							></textarea>
						</div>
						<br />
						<br />
						<Link to='/'>
							<button type='button' className='new-post form-submit-btn bold button'>
								Create post
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

export default NewPost;
