export interface ApiConfig {
    accessKey: string
    secretKey: string
}

export interface ListResponseData<T> {
    data: T[]
}

export interface ListResponseResults<T> {
    results: T[]
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
