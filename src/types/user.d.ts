import { ProfileImage, Urls } from './image'

export interface User {
    id: string
    username: string
    name: string
    bio: string | null
    total_likes: number
    total_photos: number
    total_collections: number
    for_hire: boolean
    profile_image: ProfileImage
}

export interface UserPreview {
    id: string
    username: string
    name: string
    profile_image: ProfileImage
    photos: {
        id: string
        urls: Urls
    }[]
}
