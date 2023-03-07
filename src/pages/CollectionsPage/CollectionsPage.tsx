import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useParams } from 'react-router-dom'
import { unsplashApi } from '../../api/unsplashApi'
import PhotoList from '../../components/PhotoList/PhotoList'
import { ListPhoto } from '../../types'
import Banner from './modules/Banner'

export default function CollectionsPage() {
    const { id } = useParams<string>()
    const [photos, setPhotos] = useState<ListPhoto[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const fetchData = async () => {
        try {
            if (!id) return
            setLoading(true)
            const data = await unsplashApi.getCollectionsPhotos(id, { per_page: 15, page })
            const newPhoto = [...photos, ...data.data]
            setPhotos(newPhoto)
            setPage(page + 1)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='w-[1280px] mx-auto px-8'>
            <Banner photo={photos[0]} />
            <InfiniteScroll dataLength={photos.length} next={fetchData} hasMore={true} loader={''}>
                <div className='grid-photo'>
                    <PhotoList photos={photos} loading={loading} />
                </div>
            </InfiniteScroll>
        </div>
    )
}
