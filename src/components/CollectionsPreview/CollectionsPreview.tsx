import { NavLink } from 'react-router-dom'
import { Collections } from '../../types'

export interface CollectionsPreviewProps {
    collection: Collections
}

export default function CollectionsPreview({ collection }: CollectionsPreviewProps) {
    return (
        <NavLink
            to={`/collections/${collection.id}/${collection.title}`}
            className='h-[288px] flex gap-x-1 hover:opacity-80 transition-all cursor-pointer'
        >
            <div className='w-full'>
                {collection?.preview_photos[0] ? (
                    <img
                        src={collection?.preview_photos[0]?.urls.regular}
                        alt=''
                        className='h-full object-cover block rounded-l-md w-full '
                    />
                ) : (
                    <div className='w-full h-full bg-gray-200 rounded-l-md'></div>
                )}
            </div>

            <div className='flex flex-col gap-y-1 overflow-hidden w-1/2'>
                {collection?.preview_photos[1] ? (
                    <img
                        src={collection?.preview_photos[1]?.urls.regular}
                        alt=''
                        className='h-1/2 object-cover rounded-tr-md'
                    />
                ) : (
                    <div className='w-full h-full bg-gray-200 rounded-l-md'></div>
                )}
                {collection?.preview_photos[2] ? (
                    <img
                        src={collection?.preview_photos[2]?.urls.regular}
                        alt=''
                        className='h-1/2 object-cover rounded-tr-md'
                    />
                ) : (
                    <div className='w-full h-full bg-gray-200 rounded-l-md'></div>
                )}
            </div>
        </NavLink>
    )
}
