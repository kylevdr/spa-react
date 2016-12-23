import React from 'react';

import PageTmpl from '../components/PageTmpl';

const text = 'Welcome to my React app!';

export default class Home extends React.Component {
	render() {
		return (
			<PageTmpl pageName="Home" text={text} />
		);
	}
}