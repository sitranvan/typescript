import { useContext } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Skeleton from 'react-loading-skeleton'
import CollectionsInfo from '../../../components/CollectionsInfo'
import CollectionsPreview from '../../../components/CollectionsPreview'
import NoInfo from '../../../components/NoInfo'
import { AuthorContext, Context } from '../../../contexts/authorContext'

export default function AuthorCollections() {
    const { collectionsUser, loading, fetchCollectionsUser }: Context = useContext(AuthorContext)

    return (
        <InfiniteScroll dataLength={collectionsUser.length} next={fetchCollectionsUser} hasMore={true} loader={''}>
            <div className='grid grid-cols-3 gap-x-6 gap-y-12'>
                {collectionsUser.map((collection) => {
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
            {collectionsUser.length <= 0 && <NoInfo />}
        </InfiniteScroll>
    )
}
