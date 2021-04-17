import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';

import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import focusCleanner from './utils/focusCleanner';


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(),
))

const app = (
    <BrowserRouter>
        <Provider store={store}>
            {/* <React.StrictMode> */}
                <App />
            {/* </React.StrictMode> */}
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))
focusCleanner.activate()