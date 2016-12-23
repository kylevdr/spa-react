import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Container from './pages/Container';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';

class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Container}>
					<IndexRoute component={Home} />
					<Route path='/products' component={Products} />
					<Route path='/products/:product' component={ProductDetails} />
					<Route path='/about' component={About} />
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));