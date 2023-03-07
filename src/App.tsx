import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import React, { Suspense, useEffect, useState } from 'react'
import { PacmanLoader } from 'react-spinners'
const NotResponsive = React.lazy(() => import('./components/NotResponsive'))
function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowWidth > 1024 ? (
        <Suspense
            fallback={
                <div className='w-screen h-screen flex items-center justify-center text-gray76'>
                    <PacmanLoader color='#86E7D4' />
                </div>
            }
        >
            <RouterProvider router={router} />
        </Suspense>
    ) : (
        <NotResponsive />
    )
}

export default App
