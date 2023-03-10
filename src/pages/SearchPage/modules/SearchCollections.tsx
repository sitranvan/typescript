import { useContext } from 'react'
import { Context, SearchContext } from '../../../contexts/searchContext'
import SearchPage from '../SearchPage'

import InfiniteScroll from 'react-infinite-scroll-component'
import Skeleton from 'react-loading-skeleton'
import CollectionsInfo from '../../../components/CollectionsInfo'
import CollectionsPreview from '../../../components/CollectionsPreview'
import NoInfo from '../../../components/NoInfo'

export default function SearchCollections() {
    const { collections, fetchCollections, loading }: Context = useContext(SearchContext)

    return (
        <SearchPage>
            <InfiniteScroll dataLength={collections.length} next={fetchCollections} hasMore={true} loader={''}>
                <div className='grid grid-cols-3 gap-x-6 gap-y-12'>
                    {collections.length > 0 &&
                        collections.map((collection) => {
                            if (loading) {
                                return <Skeleton key={collection.id} height={300} />
                            } else {
                                return (
                                    <div key={collection.id} className=''>
                                        <CollectionsPreview collection={collection} />
                                        <CollectionsInfo collection={collection} />
                                    </div>
                                )
                            }
                        })}
                </div>
                {collections.length <= 0 && <NoInfo />}
            </InfiniteScroll>
        </SearchPage>
    )
}
