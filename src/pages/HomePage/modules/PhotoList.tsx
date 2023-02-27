import { Fragment } from 'react'
import PhotoItem from '../../../components/PhotoItem/PhotoItem'
import { ListPhoto } from '../../../types'

interface PhotoListProps {
    photos: ListPhoto[]
}

export default function PhotoList({ photos }: PhotoListProps) {
    // Tạo mảng 3 phần tử, mỗi phần tử là một mảng chứa các ListPhoto
    const photoChunks: ListPhoto[][] = [[], [], []]
    photos.forEach((photo, index) => {
        const chunkIndex = index % 3
        photoChunks[chunkIndex].push(photo)
    })

    // Hiển thị các mảng ListPhoto lên giao diện
    let keyCount = 0
    const photoGrids = photoChunks.map((chunk: ListPhoto[]) => (
        <div key={`chunk_${keyCount++}`} className='grid-photo-list'>
            {chunk.map((photo) => (
                <PhotoItem key={`photo_${keyCount++}`} photo={photo} />
            ))}
        </div>
    ))

    return <>{photoGrids}</>
}
