export interface ApiConfig {
    accessKey: string
    secretKey: string
}

export interface ListResponseData<T> {
    data: T[]
    total?: number
}

export interface ListResponseResults<T> {
    [x: string]: any
    results: T[]
    total?: number
}

export interface TotalApi {
    totalPhotos: number
    totalCollections: number
    totalUsers: number
}
export interface ListParams {
    per_page?: number
    order_by?: string
    page?: number
    query?: string
    ids?: string
    id?: string
    slug?: string
    orientation?: string
    [key: string]: any
}
