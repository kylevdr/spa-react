import React from 'react';
import { Link } from 'react-router';

import PageTmpl from '../components/PageTmpl';

const text='Click on a product to view details:';
const productsList = ['Banana', 'Apple', 'Orange', 'Cereal', 'Bread'];

export default class Products extends React.Component {
	constructor() {
		super();
		this.state = { productsList };
	}

	renderProducts() {
		return(
			<ul>
				{this.state.productsList.map((product, index) => <li key={index}><Link to={"/products/"+product}>{product}</Link></li>)}
			</ul>
		);
	}

	render() {
		return (
			<div>
				<PageTmpl pageName="Products" text={text} />
				{this.renderProducts()}
			</div>
		);
	}
}