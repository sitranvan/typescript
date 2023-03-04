import { useContext, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { PuffLoader } from 'react-spinners'
import SearchPage from '../SearchPage'
import { Context, SearchContext } from '../../../contexts/searchContext'
import PhotoList from '../../../components/PhotoList/PhotoList'
import { useParams } from 'react-router-dom'

export interface SearchPhotosProps {}

export default function SearchPhotos(props: SearchPhotosProps) {
    const { photos, fetchPhotos }: Context = useContext(SearchContext)
    // const { keyword } = useParams<string>()
    // const fetchPhotos = async () => {
    //     const dataPhotos = await unsplashApi.searchPhotos({ query: value, per_page: 6, page })
    //     const newPhotos = [...photos, ...dataPhotos.results]
    //     setPhotos(newPhotos)
    //     setPage(page + 1)
    // }

    // useEffect(() => {
    //     console.log(keyword)
    // }, [])
    return (
        <SearchPage>
            <InfiniteScroll
                dataLength={photos.length}
                next={fetchPhotos}
                hasMore={true}
                loader={<PuffLoader className='mx-auto' color='#767676' />}
            >
                <div className='grid-photo'>
                    <PhotoList photos={photos} />
                </div>
            </InfiniteScroll>
        </SearchPage>
    )
}
