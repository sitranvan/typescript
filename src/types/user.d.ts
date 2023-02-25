import { ProfileImage } from './image'

export interface User {
    id: string
    uername: string
    name: string
    bio: string | null
    total_likes: number
    total_photos: number
    total_collections: number
    profile_image: ProfileImage
}
