import { Fragment, useEffect, useState } from 'react'
import { ListPhoto } from '../../types'
import { PuffLoader } from 'react-spinners'
import { unsplashApi } from '../../api/unsplashApi'
import Banner from './modules/Banner'
import InfiniteScroll from 'react-infinite-scroll-component'
import PhotoList from '../../components/PhotoList'
import Search from '../../components/Search'
import Slider from '../../components/Slider'
import TitleSlider from '../../components/TitleSlider'

export default function HomePage() {
    const [photos, setPhotos] = useState<ListPhoto[]>([])
    const [page, setPage] = useState<number>(1)

    const fetchData = async () => {
        try {
            const data = await unsplashApi.getList({ page })
            const newPhoto = [...photos, ...data.data]
            setPhotos(newPhoto)
            setPage(page + 1)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className=''>
            <Slider sliderImg={'./slider.avif'} photoBy='Patryk Wojcieszak'>
                <Fragment>
                    <TitleSlider />
                    <Search className='h-[54px]' />
                </Fragment>
            </Slider>
            <div className='w-[1280px] mx-auto px-8'>
                <Banner />
                <InfiniteScroll
                    dataLength={photos.length}
                    next={fetchData}
                    hasMore={true}
                    loader={<PuffLoader className='mx-auto mt-5' color='#767676' />}
                >
                    <div className='grid-photo'>
                        <PhotoList photos={photos} />
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    )
}
