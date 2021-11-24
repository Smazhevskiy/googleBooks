import React from 'react'
import './App.css'
import {Header} from '../pages/header/Header'
import libraryImg from '../assets/img/bookImg.jpg'
import {AppRoutes} from './AppRoutes'

const appStyle = {
    backgroundImage: `url(${libraryImg})`,
    height: '100vh',
    opacity: '0.9',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
}

function App() {
    return (
        <div style={appStyle}>
            <Header/>
            <AppRoutes/>
        </div>
    )
}

export default App
