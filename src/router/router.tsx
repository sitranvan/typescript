import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import SearchProvider from '../contexts/searchContext'
import AuthorProvider from '../contexts/authorContext'

const AuthorLayout = React.lazy(() => import('../layouts/AuthorLayout'))
const MainLayout = React.lazy(() => import('../layouts/MainLayout'))
const OnlyHeaderLayout = React.lazy(() => import('../layouts/OnlyHeaderLayout'))
const CollectionsPage = React.lazy(() => import('../pages/CollectionsPage'))
const DetailPage = React.lazy(() => import('../pages/DetailPage'))
const HomePage = React.lazy(() => import('../pages/HomePage'))
const SearchCollections = React.lazy(() => import('../pages/SearchPage/modules/SearchCollections'))
const SearchPhotos = React.lazy(() => import('../pages/SearchPage/modules/SearchPhotos'))
const SearchUsers = React.lazy(() => import('../pages/SearchPage/modules/SearchUsers'))
const TopicsPage = React.lazy(() => import('../pages/TopicsPage'))
const AuthorPhotos = React.lazy(() => import('../pages/AuthorPage/modules/AuthorPhotos'))
const AuthorLike = React.lazy(() => import('../pages/AuthorPage/modules/AuthorLikes'))
const AuthorCollections = React.lazy(() => import('../pages/AuthorPage/modules/AuthorCollections'))
const NotFound = React.lazy(() => import('../components/NotFound'))

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
    {
        path: '*',
        element: <NotFound />,
    },
])
