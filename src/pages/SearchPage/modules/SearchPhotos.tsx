import { useContext } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import NoInfo from '../../../components/NoInfo'
import PhotoList from '../../../components/PhotoList'
import { Context, SearchContext } from '../../../contexts/searchContext'
import SearchPage from '../SearchPage'

export default function SearchPhotos() {
    const { photos, fetchPhotos, loading }: Context = useContext(SearchContext)

    return (
        <SearchPage>
            <InfiniteScroll dataLength={photos.length} next={fetchPhotos} hasMore={true} loader={''}>
                <div className='grid-photo'>
                    <PhotoList photos={photos} loading={loading} />
                </div>
                {photos.length <= 0 && <NoInfo />}
            </InfiniteScroll>
        </SearchPage>
    )
}
