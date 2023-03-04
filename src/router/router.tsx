import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage/HomePage'
import TopicsPage from '../pages/TopicsPage/TocpicsPage'
import AuthorPage from '../pages/AuthorPage/AuthorPage'
import OnlyHeaderLayout from '../layouts/OnlyHeaderLayout'
import SearchPhotos from '../pages/SearchPage/modules/SearchPhotos'
import SearchCollections from '../pages/SearchPage/modules/SearchCollections'
import SearchProvider from '../contexts/searchContext'
import SearchUsers from '../pages/SearchPage/modules/SearchUsers'

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/t/:slug',
                element: <TopicsPage />,
            },
            {
                path: '/@/:user',
                element: <AuthorPage />,
            },
        ],
    },
    {
        element: (
            <SearchProvider>
                <OnlyHeaderLayout />
            </SearchProvider>
        ),
        children: [
            {
                path: '/s/photos/:keyword',
                element: <SearchPhotos />,
            },
            {
                path: '/s/collections/:keyword',
                element: <SearchCollections />,
            },
            {
                path: '/s/users/:keyword',
                element: <SearchUsers />,
            },
        ],
    },
])
