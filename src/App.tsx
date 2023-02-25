import { useEffect } from 'react'
import { unsplashApi } from './api/unsplashApi'
import TodoApp from './features/TodoApp'

function App() {
    useEffect(() => {
        const fetch = async () => {
            const data = await unsplashApi.getPhotoTocpic({ id: 'Fzo3zuOHN6w' })
            console.log(data.data)
        }
        fetch()
    }, [])
    return (
        <div>
            <TodoApp />
        </div>
    )
}

export default App
