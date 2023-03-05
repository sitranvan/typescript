import { Collections } from '../../types'

export interface CollectionsPreviewProps {
    collection: Collections
}

export default function CollectionsPreview({ collection }: CollectionsPreviewProps) {
    return (
        <div className='h-[288px] flex gap-x-1 hover:opacity-80 transition-all cursor-pointer'>
            <div className='w-full'>
                <img
                    src={collection.preview_photos[0]?.urls.regular}
                    alt=''
                    className='h-full object-cover block rounded-l-md w-full '
                />
            </div>

            <div className='flex flex-col gap-y-1 overflow-hidden w-1/2'>
                <img
                    src={collection.preview_photos[1]?.urls.regular}
                    alt=''
                    className='h-1/2 object-cover rounded-tr-md'
                />
                <img
                    src={collection.preview_photos[2]?.urls.small}
                    alt=''
                    className='h-1/2 object-cover rounded-br-md'
                />
            </div>
        </div>
    )
}
