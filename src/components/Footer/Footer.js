import './Footer.css';
const Footer = () => {
	return (
		<footer>
			<div className='d-flex justify-content-center'>
				<div className='d-flex justify-content-center align-items-center m-2 icon'>
					<i className='fab fa-twitter '></i>
				</div>
				<div className='d-flex justify-content-center align-items-center m-2 icon'>
					<i className='fab fa-facebook-f '></i>
				</div>
				<div className='d-flex justify-content-center align-items-center m-2 icon'>
					<i className='fab fa-github '></i>
				</div>
			</div>

			<p className='footerMessage'>Copyright © Tech Blogs {new Date().getFullYear()}</p>
		</footer>
	);
};

export default Footer;
