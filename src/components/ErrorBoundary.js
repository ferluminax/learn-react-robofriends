import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(err, info) {
		this.setState({ hasError: true });
	}

	render() {
		if(this.state.hasError) {
			return <h1>Oops. Not good.</h1>
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;