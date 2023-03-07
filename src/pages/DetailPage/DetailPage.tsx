import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useParams } from 'react-router-dom'
import { unsplashApi } from '../../api/unsplashApi'
import PhotoList from '../../components/PhotoList/PhotoList'
import RelatedTitle from '../../components/RelatedTitle'
import UserInfo from '../../components/UserInfo/UserInfo'
import { ListPhoto, Photo } from '../../types'
import DetailActions from './modules/DetailActions'
import DetailInfo from './modules/DetailInfo'
import DetailMore from './modules/DetailMore'
import DetailQuanlity from './modules/DetailQuanlity'
import RelatedCollections from './modules/RelatedCollections'
import RelatedTags from './modules/RelatedTags'

export default function DetailPage() {
    const { id } = useParams<string>()
    const [photo, setPhoto] = useState<Photo | undefined>(undefined)
    const [photoByUser, setPhotoByUser] = useState<ListPhoto[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [idUser, setIdUser] = useState<string>('')
    const [zoomImg, setZoomImg] = useState<boolean>(false)

    const handleZoomImg = () => {
        setZoomImg(!zoomImg)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!id) return
                setLoading(true)
                const data = await unsplashApi.getPhoto(id)
                setPhoto(data)
                setIdUser(data.user.username)
                setLoading(false)
                setZoomImg(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [id])

    useEffect(() => {
        const fetchData = async () => {
            if (!idUser) return
            const data = await unsplashApi.getPhotosUser(idUser, { per_page: 30, page: 1 })
            const randomData = data.data
                .slice(0) // tạo một bản sao của mảng ban đầu
                .sort(() => Math.random() - 0.5) // sắp xếp ngẫu nhiên
                .slice(0, 13) // lấy 13 phần tử đầu tiên
            setPhotoByUser(randomData)
        }
        fetchData()
    }, [idUser, id])

    return (
        <div className='w-[1280px] mx-auto px-8'>
            <div className='py-3 flex items-center justify-between'>
                {loading ? <Skeleton height={32} width={100} /> : <UserInfo photo={photo} />}
                <div className='flex items-center gap-x-2'>
                    <DetailActions />
                </div>
            </div>
            <div className=''>
                {loading ? (
                    <div className='mx-auto text-center'>
                        <Skeleton width={450} height={550} />
                    </div>
                ) : (
                    <img
                        onClick={handleZoomImg}
                        src={photo?.urls.regular}
                        alt={photo?.alt_description}
                        className={`rounded-md mx-auto w-[450px] h-[550px] cursor-zoom-in ${
                            zoomImg && 'w-full h-full cursor-zoom-out'
                        }`}
                    />
                )}
                <div className='mt-8 flex items-center justify-between'>
                    <DetailQuanlity loading={loading} photo={photo} />
                    <DetailMore />
                </div>
                <DetailInfo loading={loading} photo={photo} />
                <RelatedTitle>Related photos</RelatedTitle>
                <div className='grid-photo'>
                    <PhotoList photos={photoByUser} loading={loading} />
                </div>
                <RelatedTitle>Related collections</RelatedTitle>
                <RelatedCollections loading={loading} photo={photo} />
                <RelatedTitle>Related tags</RelatedTitle>
                <RelatedTags photo={photo} loading={loading} />
            </div>
        </div>
    )
}
