import { Fragment } from 'react'
import { ListPhoto } from '../../types'
import PhotoItem from '../PhotoItem/PhotoItem'
import Skeleton from 'react-loading-skeleton'

export interface PhotoListProps {
    photos: ListPhoto[]
    loading?: boolean
}

export default function PhotoList({ photos, loading }: PhotoListProps) {
    const photoChunks: ListPhoto[][] = [[], [], []]
    photos.forEach((photo, index) => {
        const chunkIndex = index % 3
        photoChunks[chunkIndex].push(photo)
    })

    // Hiển thị các mảng ListPhoto lên giao diện
    let keyCount = 0
    const photoList = photoChunks.map((chunk: ListPhoto[]) => (
        <div key={`chunk_${keyCount++}`} className='grid-photo-list'>
            {chunk.map((photo) => {
                if (loading) {
                    return <Skeleton key={photo.id} height={300} />
                } else {
                    return <PhotoItem key={photo.id} photo={photo} />
                }
            })}
        </div>
    ))

    return <Fragment>{photoList}</Fragment>
}
