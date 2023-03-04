import { ListPhoto } from '../../types'
import { TickIcon } from '../Icons'

export interface UserProps {
    photo: ListPhoto
}

export default function User({ photo }: UserProps) {
    return (
        <div className='flex flex-col text-white text-opacity-80 gap-y-[1px]'>
            <span className='text-[15px] inline-block font-medium leading-none'>{photo?.user.name}</span>
            {photo?.user.for_hire && (
                <p className='text-[11px] text-white text-opacity-80 flex items-center gap-x-1 leading-none'>
                    Available for hire <TickIcon />
                </p>
            )}
        </div>
    )
}
