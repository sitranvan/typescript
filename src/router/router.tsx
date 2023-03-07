import { createBrowserRouter } from 'react-router-dom'
import SearchProvider from '../contexts/searchContext'
import AuthorLayout from '../layouts/AuthorLayout'
import MainLayout from '../layouts/MainLayout'
import OnlyHeaderLayout from '../layouts/OnlyHeaderLayout'
import CollectionsPage from '../pages/CollectionsPage'
import DetailPage from '../pages/DetailPage'
import HomePage from '../pages/HomePage'
import SearchCollections from '../pages/SearchPage/modules/SearchCollections'
import SearchPhotos from '../pages/SearchPage/modules/SearchPhotos'
import SearchUsers from '../pages/SearchPage/modules/SearchUsers'
import TopicsPage from '../pages/TopicsPage'
import AuthorPhotos from '../pages/AuthorPage/modules/AuthorPhotos'
import AuthorLike from '../pages/AuthorPage/modules/AuthorLikes'
import AuthorCollections from '../pages/AuthorPage/modules/AuthorCollections'
import AuthorProvider from '../contexts/authorContext'

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
                element: (
                    <AuthorProvider>
                        <AuthorLayout />
                    </AuthorProvider>
                ),
                children: [
                    {
                        path: '/@/user/:username/photos',
                        element: <AuthorPhotos />,
                    },
                    {
                        path: '/@/user/:username/likes',
                        element: <AuthorLike />,
                    },
                    {
                        path: '/@/user/:username/collections',
                        element: <AuthorCollections />,
                    },
                ],
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
            {
                path: '/photos/:id',
                element: <DetailPage />,
            },
            {
                path: '/collections/:id/:title',
                element: <CollectionsPage />,
            },
        ],
    },
])
