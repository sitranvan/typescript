import Skeleton from 'react-loading-skeleton'
import TagName from '../../../components/TagName'
import { Photo } from '../../../types'

export interface RelatedTagsProps {
    photo: Photo | undefined
    loading: boolean
}

export default function RelatedTags({ photo, loading }: RelatedTagsProps) {
    return (
        <div className='mb-20'>
            <div className='flex items-center flex-wrap gap-2'>
                {photo?.related_collections.results.map((item) =>
                    item.tags
                        .filter((item) => item.type === 'search')
                        .map((tag) => {
                            if (loading) {
                                return <Skeleton key={tag.title} width={60} height={26} />
                            } else {
                                return (
                                    <TagName key={tag.title} to={`/s/photos/${tag.title}`}>
                                        {tag.title}
                                    </TagName>
                                )
                            }
                        }),
                )}
            </div>
        </div>
    )
}
