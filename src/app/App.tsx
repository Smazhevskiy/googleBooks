import React from 'react'
import './App.css'
import {Header} from '../pages/header/Header'
import libraryImg from '../assets/img/bookImg.jpg'
import {AppRoutes} from './AppRoutes'
import {Alerts} from '../components/Alerts/Alerts'
import {ScrollToTop} from '../components/ScrollToTop/ScrollToTop'

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
            <Alerts/>
            <Header/>
            <AppRoutes/>
            <ScrollToTop/>
        </div>
    )
}

export default App
