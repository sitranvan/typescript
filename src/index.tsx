import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from 'react-modal'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
Modal.setAppElement('#root')
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)
