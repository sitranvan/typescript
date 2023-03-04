import { useContext } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { PuffLoader } from 'react-spinners'
import { Context, SearchContext } from '../../../contexts/searchContext'
import SearchPage from '../SearchPage'
import PhotoListSekeleton from './PhotoListSekeleton'

export interface SearchPhotosProps {}

export default function SearchPhotos(props: SearchPhotosProps) {
    const { photos, fetchPhotos, loading }: Context = useContext(SearchContext)

    return (
        <SearchPage>
            <InfiniteScroll
                dataLength={photos.length}
                next={fetchPhotos}
                hasMore={true}
                loader={<PuffLoader className='mx-auto mt-5' color='#767676' />}
            >
                <div className='grid-photo'>
                    <PhotoListSekeleton photos={photos} />
                </div>
            </InfiniteScroll>
        </SearchPage>
    )
}
