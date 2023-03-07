import TagName from '../../../components/TagName'
import { UserProfile } from '../../../types'

export interface AuthorTagsProps {
    user: UserProfile | undefined
}

export default function AuthorTags({ user }: AuthorTagsProps) {
    return (
        <div className='flex items-center gap-x-2 mt-4'>
            {user?.tags.custom
                .filter((x) => x.type === 'search')
                .map((item) => (
                    <TagName key={item.title} to={`/s/photos/${item.title}`}>
                        {item.title}
                    </TagName>
                ))}
        </div>
    )
}
