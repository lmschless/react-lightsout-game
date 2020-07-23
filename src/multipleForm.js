import React, { Component } from 'react';

export default class test extends Component {
	constructor(props) {
		super(props);
		// create state for each input value, set to empty string,
		// then create helper methods to update this state.
		this.state = { username: '', email: '', password: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		// using [evt.target.name] you can grab the name of the input inside evt
		// and update that specific state accordingly without having multiple methods.
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleSubmit(evt) {
		evt.preventDefault();
		alert(`You typed: ${this.state.username}`);
		this.setState({ username: '' });
	}

	render() {
		return (
			<div>
				<h1> Form with multiple inputs </h1>
				<form onSubmit={this.handleSubmit}>
					{/* labels in JSX need to use "htmlFor" instead of for" */}
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						id="username"
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<input
						type="email"
						name="email"
						placeholder="email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<input
						type="password"
						name="password"
						placeholder="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
				</form>
			</div>
		);
	}
}
