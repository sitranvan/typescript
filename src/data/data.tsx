import {
    CollectionsIcon,
    DotMoreIcon,
    HeartIcon,
    InfoIcon,
    PhotosIcon,
    PlusIcon,
    ShareIcon,
    UsersIcon,
} from '../components/Icons'
import { DetailAction, TotalRender } from '../types'
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

export const actionList: DetailAction[] = [
    {
        children: <HeartIcon />,
    },
    {
        children: <PlusIcon />,
    },
    {
        children: <span className='text-gray76'>Download</span>,
    },
]

export const detailMore: DetailAction[] = [
    {
        children: (
            <span className='text-gray76 flex items-center gap-x-2 '>
                <ShareIcon />
                Share
            </span>
        ),
    },
    {
        children: (
            <span className='text-gray76 flex items-center gap-x-2 '>
                <InfoIcon />
                Info
            </span>
        ),
    },
    {
        children: <DotMoreIcon />,
    },
]
