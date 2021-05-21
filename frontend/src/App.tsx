import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import Router from './router/Router';
import { userActions } from './store/actions/userActions';

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initial())
    }, [])

    return (
        <Router />
    )
}

export default App;
