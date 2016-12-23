import React from 'react';

import PageTmpl from '../components/PageTmpl';

const text = 'Created by Kyle VanDeRiet to practice using webpack and react-router.'

export default class About extends React.Component {
	render() {
		return (
			<PageTmpl pageName="About" text={text} />
		);
	}
}