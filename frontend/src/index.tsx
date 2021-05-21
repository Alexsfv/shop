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
import createSagaMiddleware from 'redux-saga'
import { userSaga } from './store/saga/userSaga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
))
sagaMiddleware.run(userSaga)

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