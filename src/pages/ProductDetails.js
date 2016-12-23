import React from 'react';

import PageTmpl from '../components/PageTmpl';

export default class ProductDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: `This is the ${this.props.params.product.toLowerCase()} page.`
		};
	}
	render() {
		return (
			<PageTmpl pageName={this.props.params.product} text={this.state.text} />
		);
	}
}