import { NavLink } from 'react-router-dom'
import { UserPreview } from '../../types'

export interface PreviewUserProps {
    user: UserPreview
}

export default function PreviewUser({ user }: PreviewUserProps) {
    return (
        <div className='p-4 flex flex-col gap-y-4 border border-grayD1  transition-all rounded hover:border-black11'>
            <div className='flex items-center gap-x-4'>
                <img
                    src={user.profile_image.medium}
                    alt={user.username}
                    className='w-[64px] h-[64px] object-cover rounded-full'
                />
                <div className='flex flex-col gap-y-1'>
                    <h5 className='text-[18px] font-bold text-black11'>{user.name}</h5>
                    <span className='text-[15px] text-gray76'>{user.username}</span>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-x-2 overflow-hidden'>
                {user.photos.length > 0 &&
                    user.photos.map((photo) => (
                        <img
                            key={photo.id}
                            src={photo?.urls.regular}
                            alt='preview_photo'
                            className='h-[90px] w-full object-cover'
                        />
                    ))}
            </div>
            <NavLink
                to={`/@/user/${user.username}/photos`}
                className='w-full bg-transparent border flex justify-center items-center border-grayD1 transition-all px-3 leading-8 rounded-md bg-grayEe text-gray76 hover:border-black11 hover:text-black11 '
            >
                View profile
            </NavLink>
        </div>
    )
}
