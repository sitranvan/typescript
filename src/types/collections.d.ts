import { User } from './user.d'
import { Urls } from './image.d'
export interface Collections {
    id: string
    title: string
    preview_photos: {
        urls: Urls
    }[]
    user: User
    total_photos: number
    tags: {
        type: string
        title: string
    }[]
}
