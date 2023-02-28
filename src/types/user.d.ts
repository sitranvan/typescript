import { ProfileImage } from './image'

export interface User {
    id: string
    uername: string
    name: string
    bio: string | null
    total_likes: number
    total_photos: number
    total_collections: number
    for_hire: boolean
    profile_image: ProfileImage
}
