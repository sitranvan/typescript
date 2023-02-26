import AuthorPage from '../pages/AuthorPage'
import HomePage from '../pages/HomePage'
import TopicsPage from '../pages/TopicsPage'
import { Routers } from '../types'

export const mainRouters: Routers[] = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/t/:slugs',
        component: TopicsPage,
    },
    {
        path: '/@/:user',
        component: AuthorPage,
    },
]
