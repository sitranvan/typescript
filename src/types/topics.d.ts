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
        blur_hash: string
        created_at: string
        id: string
        updated_at: string
        urls: {
            full: string
            raw: string
            regular: string
            small: string
            small_s3: string
            thumb: string
        }
    }[]
}
