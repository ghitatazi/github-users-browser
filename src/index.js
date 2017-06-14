import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import createDebounce from 'redux-debounced';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/reducers';
import App from './components/App';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const enhancer = applyMiddleware(createDebounce(), thunkMiddleware, logger);
let store = createStore(rootReducer, enhancer);
console.log(store.getState());

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker();
