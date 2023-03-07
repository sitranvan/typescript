import { Collections } from '../../types'
import TagName from '../TagName'

export interface CollectionsInfoProps {
    collection: Collections
}

export default function CollectionsInfo({ collection }: CollectionsInfoProps) {
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
                {collection.tags &&
                    collection.tags
                        .filter((tag) => tag.type === 'search')
                        .slice(0, 4)
                        .map((tag) => (
                            <TagName key={tag.title} to={`/s/photos/${tag.title}`}>
                                {tag.title}
                            </TagName>
                        ))}
            </div>
        </div>
    )
}
