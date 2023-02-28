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
        path: '/t/:slug',
        component: TopicsPage,
    },
    {
        path: '/@/:user',
        component: AuthorPage,
    },
]
