import { createContext, useEffect, useState } from 'react'
import { unsplashApi } from '../api/unsplashApi'
import { useParams } from 'react-router-dom'
import { Collections, ListPhoto } from '../types'

export interface AuthorProviderProps {
    children: React.ReactNode
}
export interface Context {
    photosUser: ListPhoto[]
    likesUser: ListPhoto[]
    collectionsUser: Collections[]
    fetchPhotosUser: () => Promise<void>
    fetchLikesUser: () => Promise<void>
    fetchCollectionsUser: () => Promise<void>
    loading: boolean
}
export const AuthorContext = createContext<Context | any>(undefined)

export default function AuthorProvider({ children }: AuthorProviderProps) {
    const { username } = useParams<string>()
    const [photosUser, setPhotoUser] = useState<ListPhoto[]>([])
    const [likesUser, setLikesUser] = useState<ListPhoto[]>([])
    const [collectionsUser, setCollectionsUser] = useState<Collections[]>([])
    const [pagePhoto, setPagePhoto] = useState<number>(1)
    const [pageLikes, setPageLikes] = useState<number>(1)
    const [pageCollec, setPageCollec] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!username) return
                setLoading(true)
                const [dataPhotosUser, dataLikesUser, dataCollectionsUser] = await Promise.all([
                    unsplashApi.getPhotosUser(username, { per_page: 10, page: 1 }),
                    unsplashApi.getLikesUser(username, { per_page: 10, page: 1 }),
                    unsplashApi.getCollectionsUser(username, { per_page: 10, page: 1 }),
                ])
                setCollectionsUser(dataCollectionsUser.data)
                setPhotoUser(dataPhotosUser.data)
                setLikesUser(dataLikesUser.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [username])

    const fetchPhotosUser = async () => {
        if (!username) return
        try {
            setPagePhoto(pagePhoto + 1)
            const data = await unsplashApi.getPhotosUser(username, { per_page: 10, page: pagePhoto })
            const newData = [...photosUser, ...data.data]
            setPhotoUser(newData)
        } catch (error) {
            console.log(error)
        }
    }
    const fetchLikesUser = async () => {
        if (!username) return
        try {
            setPageLikes(pageLikes + 1)
            const data = await unsplashApi.getLikesUser(username, { per_page: 10, page: pageLikes })
            const newData = [...likesUser, ...data.data]
            setLikesUser(newData)
        } catch (error) {
            console.log(error)
        }
    }
    const fetchCollectionsUser = async () => {
        if (!username) return
        try {
            setPageCollec(pageCollec + 1)
            const data = await unsplashApi.getCollectionsUser(username, { per_page: 10, page: pageCollec })
            const newData = [...collectionsUser, ...data.data]
            setCollectionsUser(newData)
        } catch (error) {
            console.log(error)
        }
    }
    const values: Context = {
        photosUser,
        likesUser,
        collectionsUser,
        fetchPhotosUser,
        fetchCollectionsUser,
        fetchLikesUser,
        loading,
    }
    return <AuthorContext.Provider value={values}>{children}</AuthorContext.Provider>
}
