import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import Router from './router/Router';
import { userActions } from './store/actions/userActions';
import { userSagaActions } from './store/saga/userSaga';

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userSagaActions.checkAuth())
    }, [])

    return (
        <Router />
    )
}

export default App;
