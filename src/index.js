import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {featureReducer} from './reducers/featureReducer';

import 'bulma/css/bulma.css';
import './styles.scss';


//STEP 1: Create the store
const store = createStore(featureReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement);
