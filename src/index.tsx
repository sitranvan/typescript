import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from 'react-modal'
import App from './App'
import './index.scss'
import SearchProvider from './contexts/searchContext'
import AuthorProvider from './contexts/authorContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)


Modal.setAppElement('#root')
root.render(
    <AuthorProvider>
        <SearchProvider>
            <App />
        </SearchProvider>
    </AuthorProvider>,
)
// </React.StrictMode>,
