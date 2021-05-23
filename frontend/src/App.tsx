import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import Router from './router/Router';
import { userSagaActions } from './store/saga/userSaga';

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userSagaActions.checkAuth())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Router />
    )
}

export default App;
