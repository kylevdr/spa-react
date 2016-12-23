import React from 'react';

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.pageName}</h1>
				<p>Hello from the {this.props.pageName.toLowerCase()} page!</p>
			</div>
		);
	}
}