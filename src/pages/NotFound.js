import React from 'react';
import PageTmpl from '../components/PageTmpl';

const text = 'Page not found.';

export default class NotFound extends React.Component {
	render() {
		return (
			<PageTmpl pageName="404" text={text} />
		);
	}
}