import * as React from 'react'
import { TickIcon } from '../Icons'

export interface UserProps {}

export default function User(props: UserProps) {
    return (
        <div className='flex flex-col text-white'>
            <span className='text-[15px] inline-block font-medium leading-none'>Birk Enwald</span>
            <p className='text-[11px] text-white text-opacity-80 flex items-center gap-x-1 leading-none'>
                Available for hire <TickIcon />
            </p>
        </div>
    )
}
