import { Fragment } from 'react'
import CollectionsInfo from '../../../components/CollectionsInfo/CollectionsInfo'
import CollectionsPreview from '../../../components/CollectionsPreview/CollectionsPreview'
import { Photo } from '../../../types'
import Skeleton from 'react-loading-skeleton'

export interface RelatedCollectionsProps {
    photo: Photo | undefined
    loading: boolean
}

export default function RelatedCollections({ photo, loading }: RelatedCollectionsProps) {
    return (
        <div className='grid grid-cols-3 gap-x-6'>
            {photo?.related_collections.results.map((item) => {
                return (
                    <div key={item.id}>
                        {loading ? (
                            <Skeleton key={item.id} height={300} />
                        ) : (
                            <Fragment>
                                <CollectionsPreview collection={item} />
                                <CollectionsInfo collection={item} />
                            </Fragment>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
