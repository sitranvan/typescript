import { useEffect, useState } from 'react'
import { unsplashApi } from '../../api/unsplashApi'
import Search from '../../components/Search'
import { ListPhoto } from '../../types'
import Banner from './modules/Banner'
import PhotoList from './modules/PhotoList'
import TextInfo from './modules/TextInfo'
import TitleSlider from './modules/TitleSlider'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function HomePage() {
    const [photos, setPhotos] = useState<ListPhoto[]>([])
    const [page, setPage] = useState<number>(1)

    const handleSearchValue = (value: string) => {
        // call api
        console.log(value)
    }

    const fetchData = async () => {
        const data = await unsplashApi.getList({ per_page: 30, page })
        setPhotos([...photos, ...data.data])
        setPage(page + 1)
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className=''>
            <div
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw0MTQ0MDZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY3NzQ5MzA1OQ&ixlib=rb-4.0.3&q=80')`,
                }}
                className='h-[565px] bg-cover bg-no-repeat relative '
            >
                <div className='bg-black11 absolute inset-0 bg-opacity-50'></div>
                <div className='top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-2/3 px-24'>
                    <TitleSlider />
                    <Search className='h-[54px]' onSubmitSearch={handleSearchValue} />
                </div>
                <TextInfo />
            </div>
            <div className='w-[1280px] mx-auto px-8'>
                <Banner />
                <InfiniteScroll dataLength={photos.length} next={fetchData} hasMore={true} loader={<h4>Loading...</h4>}>
                    <div className='grid-photo'>
                        <PhotoList photos={photos} />
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    )
}
