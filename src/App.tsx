import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { mainRouters } from './routers'
function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                {mainRouters.map((router) => {
                    const Page = router.component
                    return <Route key={router.path} path={router.path} element={<Page />} />
                })}
            </Route>
        </Routes>
    )
}

export default App
