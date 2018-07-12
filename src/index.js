import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

import './index.css';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
	<Provider store = {createStoreWithMiddleware(reducers)}>
	<App />
	</Provider>
	, document.getElementById('root'));
