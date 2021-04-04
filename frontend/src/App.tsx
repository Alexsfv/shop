import React from 'react';
import './App.scss';
import NavbarLayout from './components/layouts/NavbarLayout/NavbarLayout';
import MainPage from './pages/MainPage/MainPage';

function App() {
    return (
        <NavbarLayout>
            <MainPage/>
        </NavbarLayout>
    )
}

export default App;
