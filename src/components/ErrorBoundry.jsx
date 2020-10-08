import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor(props) {
		super();
		this.state = {
			hasError: true
		};
	}

	render() {
		if (!this.state.hasError) {
			return <h1>Ooops. An Error Has Occured.</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundry;
