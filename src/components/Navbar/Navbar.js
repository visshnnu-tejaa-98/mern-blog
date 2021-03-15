import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import '../../App.css';
const Navbar = () => {
	const history = useHistory();
	const hangleGithub = () => {
		window.location.href = 'https://github.com';
		return null;
	};
	return (
		<div className='navbarComponent'>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className=' container container-width'>
					<Link className='navbar-brand brand' to='#'>
						Tech Blogs
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse ' id='navbarNavAltMarkup'>
						<div className='navbar-nav '>
							<Link className='nav-link links active' to='/'>
								Home
							</Link>
							<Link className='nav-link links' to='/about'>
								About
							</Link>
							<Link className='nav-link links' to='/contact'>
								Contact
							</Link>
							<Link className='nav-link links' to='#' onClick={hangleGithub}>
								Github
							</Link>
							<Link type='button' className='button' to='./newpost'>
								<p className='mb-0'>New Post</p>
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
