import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { unsplashApi } from '../api/unsplashApi'
import { Collections, ListPhoto, TotalApi, UserPreview } from '../types'

export interface SearchProviderProps {
    children: JSX.Element
}

export interface Context {
    value: string
    loading: boolean
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
    const { keyword } = useParams<string>()
    const [value, setValue] = useState<string>('')
    const [pagePhotos, setPagePhotos] = useState<number>(2)
    const [pageCollections, setPageCollections] = useState<number>(2)
    const [pageUsers, setPageUsers] = useState<number>(2)
    const [photos, setPhotos] = useState<ListPhoto[]>([])
    const [collections, setCollections] = useState<Collections[]>([])
    const [users, setUsers] = useState<UserPreview[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [totals, setTotals] = useState<TotalApi>({
        totalPhotos: 0,
        totalCollections: 0,
        totalUsers: 0,
    })
    const handleSubmit = async (e?: React.ChangeEvent<HTMLFormElement>) => {
        try {
            e?.preventDefault()
            setLoading(true)
            const [dataPhotos, dataCollections, dataUser] = await Promise.all([
                unsplashApi.searchPhotos({ query: value || keyword, per_page: 6, page: 1 }),
                unsplashApi.searchCollections({
                    query: value || keyword,
                    per_page: 6,
                    page: 1,
                }),
                unsplashApi.searchUsers({ query: value || keyword, per_page: 10, page: 1 }),
            ])

            setPhotos(dataPhotos.results)

            setCollections(dataCollections.results)

            setUsers(dataUser.results)

            const newTotal: TotalApi = {
                totalPhotos: dataPhotos.total || 0,
                totalCollections: dataCollections.total || 0,
                totalUsers: dataUser.total || 0,
            }
            setTotals(newTotal)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchPhotos = async () => {
        try {
            if (!keyword) return
            const dataPhotos = await unsplashApi.searchPhotos({ query: keyword, per_page: 6, page: pagePhotos })
            const newPhotos = [...photos, ...dataPhotos.results]
            setPhotos(newPhotos)
            setPagePhotos(pagePhotos + 1)
        } catch (error) {
            console.log(error)
        }
    }
    const fetchCollections = async () => {
        try {
            if (!keyword) return
            const dataPhotos = await unsplashApi.searchCollections({
                query: keyword,
                per_page: 6,
                page: pageCollections,
            })
            const newCollections = [...collections, ...dataPhotos.results]
            setCollections(newCollections)
            setPageCollections(pageCollections + 1)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchUsers = async () => {
        try {
            if (!keyword) return
            const dataUsers = await unsplashApi.searchUsers({ query: keyword, per_page: 10, page: pageUsers })
            const newUsers = [...users, ...dataUsers.results]
            setUsers(newUsers)
            setPageUsers(pageUsers + 1)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!keyword) return
        handleSubmit()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword])

    const values: Context = {
        value,
        loading,
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
