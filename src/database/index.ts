export interface ProfileImage {
    small: string
    medium: string
    large: string
}

export interface User {
    id: string
    uername: string
    name: string
    bio: string | null
    total_likes: number
    otal_photos: number
    total_collections: number
    profile_image: ProfileImage
}

export interface Urls {
    full: string
    regular: string
    small: string
}

export interface Links {
    download: string
    download_location: string
}
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
