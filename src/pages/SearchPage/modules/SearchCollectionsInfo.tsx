import { Collections } from '../../../types'

export interface SearchCollectionsInfoProps {
    collection: Collections
}

export default function SearchCollectionsInfo({ collection }: SearchCollectionsInfoProps) {
    return (
        <div className='mt-4'>
            <h2 className='text-xl font-semibold text-black11 capitalize'>{collection.title}</h2>
            <div className='flex items-center gap-x-2 text-gray76 mt-1 mb-[13px]'>
                {collection.total_photos} photo <span>•</span>
                <span className='flex items-center gap-x-1 '>
                    Curated by
                    <a className='hover:underline hover:text-black11 transition-all' href='/'>
                        {collection.user.name}
                    </a>
                </span>
            </div>
            <div className='flex items-center gap-x-2'>
                {collection.tags.length > 0 &&
                    collection.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag.title}
                            className='text-gray76 leading-[26px] px-2 bg-grayEe inline-block rounded-[2px] capitalize'
                        >
                            {tag.title}
                        </span>
                    ))}
            </div>
        </div>
    )
}
