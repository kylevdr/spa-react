import React from 'react';
import { IndexLink } from 'react-router';

export default class Navbar extends React.Component {
	render() {
		return (
			<nav>
				<ul>
					<li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
					<li><IndexLink activeClassName="active" to="/products">Products</IndexLink></li>
					<li><IndexLink activeClassName="active" to="/about">About</IndexLink></li>
				</ul>
			</nav>
		);
	}
}