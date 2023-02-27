import * as React from 'react'
import ButtonActions from '../ButtonActions'
import { DownIcon, HeartIcon, PlusIcon } from '../Icons'
import User from '../User'
import { ListPhoto } from '../../types'

export interface PhotoItemProps {
    photo: ListPhoto
}

export default function PhotoItem({ photo }: PhotoItemProps) {
    return (
        <div className='relative grid-photo-group cursor-pointer'>
            <img src={photo.urls.full} alt='' className='h-full' />
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
                    <div className='flex gap-x-2 items-center'>
                        <img
                            src='https://plus.unsplash.com/premium_photo-1661717145943-8485a17dec16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                            alt=''
                            className='w-8 h-8 rounded-full object-cover'
                        />
                        <User />
                    </div>
                    <ButtonActions>
                        <DownIcon />
                    </ButtonActions>
                </div>
            </div>
        </div>
    )
}
