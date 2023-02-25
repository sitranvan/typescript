import { ListPhoto, Topics } from '../types'
import { ListParams, ListResponseData, ListResponseResults } from './../types/api'
import { unsplashRequest } from './../utils/httpRequest'

export const unsplashApi = {
    getList: async (params: ListParams): Promise<ListResponseData<ListPhoto>> => {
        const url: string = '/photos'
        const response = await unsplashRequest.get(url, { params })
        return response
    },
    getPhoto: async (id: string): Promise<ListPhoto> => {
        const url: string = `/photos/${id}`
        const response = await unsplashRequest.get(url)
        return response.data
    },
    searchPhoto: async (params: ListParams): Promise<ListResponseResults<ListPhoto>> => {
        const url: string = '/search/photos'
        const response = await unsplashRequest.get(url, { params })
        return response.data
    },
    getTopics: async (params: ListParams): Promise<ListResponseData<Topics>> => {
        const url: string = '/topics'
        const response = await unsplashRequest.get(url, { params })
        return response
    },
    getPhotoTocpic: async (params: ListParams): Promise<ListResponseData<ListPhoto>> => {
        const url: string = `/topics/${params.id}/photos`
        const response = await unsplashRequest.get(url, { params })
        return response
    },
}
