import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NewPost from './components/NewPost/NewPost';

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
			</Switch>
		</BrowserRouter>
	);
}

export default App;
