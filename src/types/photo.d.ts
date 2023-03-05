import { Urls } from './image'
import { User } from './user'

export interface Photo {
    id: string
    created_at: string
    alt_description: string
    urls: Urls
    views: number
    downloads: number
    user: User
    location: {
        city: string
        country: string
        name: string
    }
    tags: {
        type: string
        title: string
    }[]
    exif: {
        name: string
    }
    related_collections: {
        results: {
            id: string
            title: string
            preview_photos: {
                id: string
                urls: Urls
            }[]
            tags: {
                type: string
                title: string
            }[]
            total_photos: number
            user: User
        }[]
    }
}
