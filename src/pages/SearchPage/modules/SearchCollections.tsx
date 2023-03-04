import { useContext } from 'react'
import { Context, SearchContext } from '../../../contexts/searchContext'
import SearchPage from '../SearchPage'
import SearchCollectionsInfo from './SearchCollectionsInfo'
import SearchCollectionsPreview from './SearchCollectionsPreview'
import InfiniteScroll from 'react-infinite-scroll-component'
import { PuffLoader } from 'react-spinners'
import Skeleton from 'react-loading-skeleton'

export default function SearchCollections() {
    const { collections, fetchCollections, loading }: Context = useContext(SearchContext)

    return (
        <SearchPage>
            <InfiniteScroll
                dataLength={collections.length}
                next={fetchCollections}
                hasMore={true}
                loader={<PuffLoader className='mx-auto mt-5' color='#767676' />}
            >
                <div className='grid grid-cols-3 gap-x-6 gap-y-12'>
                    {collections.length > 0 &&
                        collections.map((collection) => {
                            if (loading) {
                                return <Skeleton height={300} />
                            } else {
                                return (
                                    <div key={collection.id} className=''>
                                        <SearchCollectionsPreview collection={collection} />
                                        <SearchCollectionsInfo collection={collection} />
                                    </div>
                                )
                            }
                        })}
                </div>
            </InfiniteScroll>
        </SearchPage>
    )
}
