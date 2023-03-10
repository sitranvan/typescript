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

export interface UserProfile {
    id: string
    username: string
    name: string
    bio: string | null
    first_name: string
    total_likes: number
    total_photos: number
    total_collections: number
    portfolio_url: string
    allow_messages: boolean
    social: {
        portfolio_url: string
        instagram_username: string | null
    }
    tags: {
        custom: {
            type: string
            title: string
        }[]
    }
    location: string
    for_hire: boolean
    profile_image: ProfileImage
}
