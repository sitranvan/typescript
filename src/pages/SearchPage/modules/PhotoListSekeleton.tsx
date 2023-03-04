import { Fragment, useContext } from 'react'
import PhotoItem from '../../../components/PhotoItem/PhotoItem'
import { Context, SearchContext } from '../../../contexts/searchContext'
import { ListPhoto } from '../../../types'
import Skeleton from 'react-loading-skeleton'

export interface PhotoListSekeletonProps {
    photos: ListPhoto[]
}

export default function PhotoListSekeleton({ photos }: PhotoListSekeletonProps) {
    const { loading }: Context = useContext(SearchContext)
    const photoChunks: ListPhoto[][] = [[], [], []]
    photos.forEach((photo, index) => {
        const chunkIndex = index % 3
        photoChunks[chunkIndex].push(photo)
    })

    // Hiển thị các mảng ListPhoto lên giao diện
    let keyCount = 0
    const photoListSekeleton = photoChunks.map((chunk: ListPhoto[]) => (
        <div key={`chunk_${keyCount++}`} className='grid-photo-list'>
            {chunk.map((photo) => {
                if (loading) {
                    return <Skeleton height={300} />
                } else {
                    return <PhotoItem key={photo.id} photo={photo} />
                }
            })}
        </div>
    ))

    return <Fragment>{photoListSekeleton}</Fragment>
}
