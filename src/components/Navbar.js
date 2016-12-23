import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
	render() {
		return (
			<ul className="navbar">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
		);
	}
}