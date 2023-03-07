import { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { unsplashApi } from '../api/unsplashApi'
import AuthorTotal from '../pages/AuthorPage/modules/AuhorTotal'
import AuthorInfo from '../pages/AuthorPage/modules/AuthorInfo'
import { UserProfile } from '../types'

export default function AuthorPage() {
    const { username } = useParams<string>()
    const [loading, setLoading] = useState<boolean>(false)
    const [userInfo, setUserInfo] = useState<UserProfile>()

    const [totals, setTotals] = useState<any>({
        total_likes: 0,
        total_photos: 0,
        total_collections: 0,
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!username) return
                setLoading(true)
                const data = await unsplashApi.getUser(username!)
                setTotals({
                    total_photos: data.total_photos,
                    total_likes: data.total_likes,
                    total_collections: data.total_collections,
                })
                setUserInfo(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [username])

    return (
        <div className='w-[1280px] mx-auto px-8'>
            <AuthorInfo user={userInfo} />
            <AuthorTotal loading={loading} totals={totals} />
            <div className='mt-14'>
                <Outlet />
            </div>
        </div>
    )
}
