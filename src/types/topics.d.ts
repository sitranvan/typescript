import { Urls } from './image.d'
import { User } from './user.d'

export interface Topics {
    id: string
    slug: string
    title: string
    description: string
    total_photos: number
    cover_photo: {
        user: User
        urls: Urls
    }
    preview_photos: {
        urls: Urls
    }[]
}
