import { Fragment, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { unsplashApi } from '../../api/unsplashApi'
import Search from '../../components/Search'
import { ListPhoto } from '../../types'
import Banner from './modules/Banner'
import PhotoList from './modules/PhotoList'
import Slider from './modules/Slider'
import TitleSlider from './modules/TitleSlider'
import { PuffLoader } from 'react-spinners'

export default function HomePage() {
    const [photos, setPhotos] = useState<ListPhoto[]>([])
    const [page, setPage] = useState<number>(1)

    const handleSearchValue = (value: string) => {
        // call api
        console.log(value)
    }

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
                    <Search className='h-[54px]' onSubmitSearch={handleSearchValue} />
                </Fragment>
            </Slider>
            <div className='w-[1280px] mx-auto px-8'>
                <Banner />
                <InfiniteScroll
                    dataLength={photos.length}
                    next={fetchData}
                    hasMore={true}
                    loader={<PuffLoader className='mx-auto' color='#767676' />}
                >
                    <div className='grid-photo'>
                        <PhotoList photos={photos} />
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    )
}
