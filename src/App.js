import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NewPost from './components/NewPost/NewPost';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import SinglePost from './components/SinglePost/SinglePost';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/about' exact>
					<About />
				</Route>
				<Route path='/contact' exact>
					<Contact />
				</Route>
				<Route path='/newpost' exact>
					<NewPost />
				</Route>
				<Route path='/Login' exact>
					<Login />
				</Route>
				<Route path='/register' exact>
					<Register />
				</Route>
				<Route path='/singlepost/:id'>
					<SinglePost />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
