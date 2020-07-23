import React, { Component } from 'react';

export default class test extends Component {
	constructor(props) {
		super(props);
		// create state for each input value, set to empty string,
		// then create helper methods to update this state.
		this.state = { username: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({ userName: evt.target.value });
	}

	handleSubmit(evt) {
		evt.preventDefault();
		alert(`You typed: ${this.state.username}`);
		this.setState({ username: '' });
	}

	render() {
		return (
			<div>
				<h1> Form Demo </h1>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						value={this.state.username}
						onChange={this.handleChange}
					/>
				</form>
			</div>
		);
	}
}
