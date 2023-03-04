import { Collections, ListPhoto, Topics, UserPreview } from '../types'
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
    searchPhotos: async (params: ListParams): Promise<ListResponseResults<ListPhoto>> => {
        const url: string = '/search/photos'
        const response = await unsplashRequest.get(url, { params })
        return response.data
    },
    searchCollections: async (params: ListParams): Promise<ListResponseResults<Collections>> => {
        const url: string = '/search/collections'
        const response = await unsplashRequest.get(url, { params })
        return response.data
    },
    searchUsers: async (params: ListParams): Promise<ListResponseResults<UserPreview>> => {
        const url: string = '/search/users'
        const response = await unsplashRequest.get(url, { params })
        return response.data
    },
    getTopics: async (params: ListParams): Promise<ListResponseData<Topics>> => {
        const url: string = '/topics'
        const response = await unsplashRequest.get(url, { params })
        return response
    },
    getPhotosTocpic: async (slug: string, params: ListParams): Promise<ListResponseData<ListPhoto>> => {
        const url: string = `/topics/${slug}/photos`
        const response = await unsplashRequest.get(url, { params })
        return response
    },
    getCollectionsPhotos: async (id: string, params: ListParams): Promise<ListResponseData<ListPhoto>> => {
        const url = `/collections/${id}/photos`
        const response = await unsplashRequest.get(url, { params })
        return response
    },
}
