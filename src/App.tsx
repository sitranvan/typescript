import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function App() {
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const dataUserPhoto = await unsplashApi.getPhotoUsers('joshhild', { per_page: 3 })

    //         console.log('fetchData ~ dataUserPhoto:', dataUserPhoto.data[0].urls.regular)
    //     }
    //     fetchData()
    // }, [])
    return <RouterProvider router={router} />
}

export default App
