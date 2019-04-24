import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import reducers from '../../../reducers';
import App from '../App';

describe('Tests of App component.', () => {
	test('App component should render without crash.', () => {
		const div = document.createElement('div');
		const store = createStore(reducers, applyMiddleware(thunk));

		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
