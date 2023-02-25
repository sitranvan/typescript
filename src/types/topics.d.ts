import { Urls } from './image'

export interface Topics {
    id: string
    slug: string
    title: string
    description: string
    total_photos: number
    preview_photos: Urls
}
