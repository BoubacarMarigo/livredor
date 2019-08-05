import React from 'react';
import axios from 'axios';
import FormPage from './FormPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ListPage extends React.Component {
	state = {
		messages: []
	};
	componentDidMount = async () => {
		const response = await axios.get('https://livredor-api.herokuapp.com/messages');
		this.setState({
			messages: response.data,
			isLoading: false
		});
	};

	render = () => {
		return (
			<div>
				{this.state.messages.map((el1, index1) => {
					return (
						<div>
							<ul className="list">
								<li key={el1.id}>{el1.content}</li>
							</ul>
							<div>
								<Route path="/login" component={FormPage} />
							</div>
						</div>
					);
				})}
			</div>
		);
	};
}

export default ListPage;
