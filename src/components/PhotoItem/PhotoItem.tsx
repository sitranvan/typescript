import { NavLink } from 'react-router-dom'
import { Photo } from '../../types'
import ButtonActions from '../ButtonActions'
import { DownIcon, HeartIcon, PlusIcon } from '../Icons'
import UserInfo from '../UserInfo/UserInfo'

export interface PhotoItemProps {
    photo: Photo | any
}

export default function PhotoItem({ photo }: PhotoItemProps) {
    return (
        <NavLink to={`/photos/${photo?.id}`} className='relative grid-photo-group cursor-pointer '>
            <img src={photo?.urls.small} alt='' className='h-full w-full' />

            <div className='absolute inset-0 bg-black11 bg-opacity-30 flex flex-col justify-between grid-photo-content'>
                <div className='flex items-center gap-x-2 justify-end m-4'>
                    <ButtonActions>
                        <HeartIcon />
                    </ButtonActions>
                    <ButtonActions>
                        <PlusIcon />
                    </ButtonActions>
                </div>
                <div className='m-4 flex justify-between items-center'>
                    <UserInfo gray photo={photo} />
                    <ButtonActions>
                        <DownIcon />
                    </ButtonActions>
                </div>
            </div>
        </NavLink>
    )
}
