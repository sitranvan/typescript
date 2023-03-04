import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { unsplashApi } from '../api/unsplashApi'
import { Collections, ListPhoto, TotalApi, User, UserPreview } from '../types'

export interface SearchProviderProps {
    children: JSX.Element
}

export interface Context {
    value: string
    setValue: (value: string) => void
    handleSubmit: (value: any) => Promise<void>
    fetchPhotos: () => Promise<void>
    fetchCollections: () => Promise<void>
    fetchUsers: () => Promise<void>
    totals: TotalApi
    photos: ListPhoto[]
    collections: Collections[]
    users: UserPreview[]
}

export const SearchContext = createContext<Context | any>(undefined)

export default function SearchProvider({ children }: SearchProviderProps) {
    const { keyword } = useParams()
    const [value, setValue] = useState<string>('')
    const [pagePhotos, setPagePhotos] = useState<number>(2)
    const [pageCollections, setPageCollections] = useState<number>(2)
    const [pageUsers, setPageUsers] = useState<number>(2)
    const [photos, setPhotos] = useState<ListPhoto[]>([])
    const [collections, setCollections] = useState<Collections[]>([])
    const [users, setUsers] = useState<UserPreview[]>([])
    const [totals, setTotals] = useState<TotalApi>({
        totalPhotos: 0,
        totalCollections: 0,
        totalUsers: 0,
    })
    const handleSubmit = async (e?: React.ChangeEvent<HTMLFormElement>) => {
        e?.preventDefault()
        // api search photos
        const dataPhotos = await unsplashApi.searchPhotos({ query: value || keyword, per_page: 6, page: 1 })
        setPhotos(dataPhotos.results)
        // api search collections
        const dataCollections = await unsplashApi.searchCollections({ query: value || keyword, per_page: 6, page: 1 })
        setCollections(dataCollections.results)
        // api get a collection’s photos
        // const data = await unsplashApi.getCollectionsPhotos('599017', {})
        // api search users
        const dataUser = await unsplashApi.searchUsers({ query: value || keyword, page: 1, per_page: 6 })
        setUsers(dataUser.results)

        const newTotal: TotalApi = {
            totalPhotos: dataPhotos.total || 0,
            totalCollections: dataCollections.total || 0,
            totalUsers: dataUser.total || 0,
        }
        setTotals(newTotal)
    }

    const fetchPhotos = async () => {
        if (!keyword) return
        const dataPhotos = await unsplashApi.searchPhotos({ query: keyword, per_page: 6, page: pagePhotos })
        const newPhotos = [...photos, ...dataPhotos.results]
        setPhotos(newPhotos)
        setPagePhotos(pagePhotos + 1)
    }
    const fetchCollections = async () => {
        if (!keyword) return
        const dataPhotos = await unsplashApi.searchCollections({ query: keyword, per_page: 6, page: pageCollections })
        const newCollections = [...collections, ...dataPhotos.results]
        setCollections(newCollections)
        setPageCollections(pageCollections + 1)
    }

    const fetchUsers = async () => {
        if (!keyword) return
        const dataUsers = await unsplashApi.searchUsers({ query: keyword, per_page: 6, page: pageUsers })
        const newUsers = [...users, ...dataUsers.results]
        setUsers(newUsers)
        setPageUsers(pageUsers + 1)
    }
    useEffect(() => {
        if (!keyword) return
        handleSubmit()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const values: Context = {
        value,
        setValue,
        handleSubmit,
        totals,
        photos,
        fetchPhotos,
        collections,
        fetchCollections,
        users,
        fetchUsers,
    }
    return <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
}
