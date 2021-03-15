import Navbar from '../Navbar/Navbar';
import './NewPost.css';
const NewPost = () => {
	return (
		<div className='newPost'>
			<Navbar />
			<div class='container form-container pb-5'>
				<div class=' form-middle'>
					<p className='postContent'>Post Content</p>
					<div class='form-group'>
						<input
							type='text'
							class='form-control'
							id='heading'
							name='heading'
							placeholder='Post Heading'
						/>
					</div>
					<br />
					<div class='form-group'>
						<input
							type='text'
							class='form-control'
							id='subheading'
							name='subheading'
							placeholder='Post Subheading'
						/>
						<br />
					</div>
					<div class='form-group'>
						<input
							type='url'
							class='form-control'
							id='bg-url'
							placeholder='Post background image (enter url)'
						/>
						<small id='bg-ur' class='form-text text-light'>
							Use an image URL (ex. https://source.unsplash.com/WLUHO9A_xik/1600x900)
						</small>
						<br />
						<br />
					</div>
					<div class='form-group'>
						<textarea
							name='postdiscription'
							id='postdiscription'
							class='form-control'
							rows='3'
							placeholder='Post Body Text'
						></textarea>
					</div>
					<br />
					<br />
					<button type='button' class='new-post form-submit-btn bold button'>
						Create post
					</button>
					<p>Post Content</p>
					<div className='form-control form-preview '>
						<h3 className='preview-text' id='preview-text'></h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewPost;
