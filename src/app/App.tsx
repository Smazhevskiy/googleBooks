import React from 'react'
import './App.css'
import {Header} from '../components/header/Header'
import libraryImg from '../assets/img/bookImg.jpg'
import {AppRoutes} from './AppRoutes'
import {Alerts} from '../components/Alerts/Alerts'
import {ScrollToTop} from '../components/ScrollToTop/ScrollToTop'

const appStyle = {
    backgroundImage: `url(${libraryImg})`,
    height: 'auto',
    opacity: '0.9',
    backgroundSize: 'cover',
    minHeight:'100vh',
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
