import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class FormPage extends React.Component {
	render = () => {
		return (
			<Router>
				<div className="myform">
					<h1>Livre d'or</h1>
					<input placeholder="username" />
					<br />
					<input placeholder="password" />
				</div>
			</Router>
		);
	};
}

export default FormPage;
