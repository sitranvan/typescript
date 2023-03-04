import { CollectionsIcon, PhotosIcon, UsersIcon } from '../components/Icons'
import { TotalRender } from '../types'
import formatNumber from '../utils/formatNumber'

export const totalList: TotalRender[] = [
    {
        path: (keyword: string | undefined) => `/s/photos/${keyword}`,
        icon: <PhotosIcon />,
        title: (payload: any) => formatNumber(payload),
        label: 'photo',
    },
    {
        path: (keyword: string | undefined) => `/s/collections/${keyword}`,
        icon: <CollectionsIcon />,
        title: (payload: any) => formatNumber(payload),
        label: 'collections',
    },
    {
        path: (keyword: string | undefined) => `/s/users/${keyword}`,
        icon: <UsersIcon />,
        title: (payload: any) => formatNumber(payload),
        label: 'users',
    },
]
