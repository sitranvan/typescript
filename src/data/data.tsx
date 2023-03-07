import {
    CollectionsIcon,
    DotMoreIcon,
    EarthIcon,
    HeartIcon,
    InfoIcon,
    InstagramIcon,
    PhotosIcon,
    PlusIcon,
    ShareIcon,
    UsersIcon,
} from '../components/Icons'
import { DetailAction, OptionFilter, TotalRender, UserConnect } from '../types'
import formatNumber from '../utils/formatNumber'

export const totalList: TotalRender[] = [
    {
        path: (keyword: string | undefined) => `/s/photos/${keyword}`,
        icon: <PhotosIcon />,
        title: (payload: any) => formatNumber(payload),
        label: 'photo',
        url: 'photo',
    },
    {
        path: (keyword: string | undefined) => `/s/collections/${keyword}`,
        icon: <CollectionsIcon />,
        title: (payload: any) => formatNumber(payload),
        label: 'collections',
        url: 'collections',
    },
    {
        path: (keyword: string | undefined) => `/s/users/${keyword}`,
        icon: <UsersIcon />,
        title: (payload: any) => formatNumber(payload),
        label: 'users',
        url: 'users',
    },
]

export const totalListUser: TotalRender[] = [
    {
        path: (payload: string | undefined) => `/@/user/${payload}`,
        icon: <PhotosIcon />,
        title: (payload: any) => formatNumber(payload),
        label: 'photos',
        url: 'photos',
    },
    {
        path: (payload: string | undefined) => `/@/user/${payload}`,
        icon: <HeartIcon />,
        title: (payload: any) => formatNumber(payload),
        label: 'likes',
        url: 'likes',
    },
    {
        path: (payload: string | undefined) => `/@/user/${payload}`,
        icon: <CollectionsIcon />,
        title: (payload: any) => formatNumber(payload),
        label: 'collections',
        url: 'collections',
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

export const optionFilter: OptionFilter[] = [
    {
        title: 'Any orientation',
        label: 'Any orientation',
    },
    {
        title: 'landscape',
        label: 'Landscape',
    },
    {
        title: 'portrait',
        label: 'Portrait',
    },
]

export const userConnectList: UserConnect[] = [
    {
        username: true,
        icon: <EarthIcon />,
        title: 'instagram.com',
    },
    {
        icon: <InstagramIcon />,
        title: 'Instagram',
    },
]
