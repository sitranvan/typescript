import { Photo } from '../../types'
import { TickIcon } from '../Icons'

export interface UserInfoProps {
    photo: Photo | undefined
    gray?: boolean
}

export default function UserInfo({ photo, gray }: UserInfoProps) {
    return (
        <div className='flex items-center gap-x-3'>
            <img
                src={photo?.user.profile_image.medium}
                alt={photo?.user.username}
                className='w-[32px] h-[32px] object-cover rounded-full'
            />
            {gray ? (
                <div className='flex flex-col text-white text-opacity-80 gap-y-[1px]'>
                    <span className='text-[15px] inline-block font-medium leading-none'>
                        {photo?.user.name || 'User'}
                    </span>
                    {photo?.user.for_hire && (
                        <p className='text-[11px] text-white text-opacity-80 flex items-center gap-x-1 leading-none'>
                            Available for hire <TickIcon />
                        </p>
                    )}
                </div>
            ) : (
                <div className='flex flex-col text-black11 gap-y-[1px]'>
                    <span className='text-[15px] inline-block font-medium leading-none'>{photo?.user.name}</span>
                    {photo?.user.for_hire && (
                        <p className='text-[11px] text-[#007fff] flex items-center gap-x-1 leading-none'>
                            Available for hire <TickIcon />
                        </p>
                    )}
                </div>
            )}
        </div>
    )
}
