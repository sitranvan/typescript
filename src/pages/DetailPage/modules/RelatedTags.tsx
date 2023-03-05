import Skeleton from 'react-loading-skeleton'
import { useNavigate } from 'react-router-dom'
import { Photo } from '../../../types'

export interface RelatedTagsProps {
    photo: Photo | undefined
    loading: boolean
}

export default function RelatedTags({ photo, loading }: RelatedTagsProps) {
    const navigate = useNavigate()
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
                                    <span
                                        key={tag.title}
                                        onClick={() => navigate(`/s/photos/${tag.title}`)}
                                        className='leading-[26px] text-gray76 bg-grayEe inline-block px-2 rounded-sm hover:text-black11 transition-all cursor-pointer'
                                    >
                                        {tag.title}
                                    </span>
                                )
                            }
                        }),
                )}
            </div>
        </div>
    )
}
