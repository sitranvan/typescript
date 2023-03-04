import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from 'react-modal'
import App from './App'
import './index.scss'
import SearchProvider from './contexts/searchContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

Modal.setAppElement('#root')
root.render(
    <React.StrictMode>
        <SearchProvider>
            <App />
        </SearchProvider>
    </React.StrictMode>,
)
