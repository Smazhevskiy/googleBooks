import React from 'react'
import './App.css'
import {Header} from './pages/Header'
import libraryImg from '../src/assets/img/bookImg.jpg'

const appStyle = {
    backgroundImage: `url(${libraryImg})`,
    height: '100vh',
    opacity: '0.9',
    backgroundSize:'cover',
    backgroundAttachment:'fixed'
}

function App() {
    return (
        <div style={appStyle}>
            <Header/>
        </div>
    )
}

export default App
