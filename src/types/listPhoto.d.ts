import { Urls } from './image'
import { Links } from './links'
import { User } from './user'

export interface ListPhoto {
    id: string
    color: string
    description: string | null
    alt_description: string
    likes: number
    urls: Urls
    user: User
    links: Links
}
