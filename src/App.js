import React from 'react';
import axios from 'axios';
import FormPage from './FormPage';
import ListPage from './ListPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

class App extends React.Component {
	render = () => {
		return (
			<Router>
				<Route exact path="/" component={ListPage} />

				<Route className="myfrom" path="/login" component={FormPage} />

				<nav>
					<Link className="link--login" to="/login">
						Login
					</Link>
				</nav>
			</Router>
		);
	};
}

export default App;
