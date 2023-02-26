import React, { Fragment } from 'react'
import { NextIcon, PrevIcon } from '../../components/Icons'

export interface TopicsProps {}

export default function Topics(props: TopicsProps) {
    return (
        <Fragment>
            <div className='text-gray76 flex items-center gap-x-6 h-[56px]'>
                <span className='cursor-pointer hover:text-black11 h-full flex items-center border-b-[2px] border-black11'>
                    Editorial
                </span>
                <span className='cursor-pointer hover:text-black11 h-full flex items-center'>Following</span>
            </div>
            <div className='h-[32px] w-[1px] bg-grayD1 items-center'></div>
            <button className='text-2xl '>
                <PrevIcon />
            </button>
            <div className='flex items-center justify-between text-gray76 flex-1 overflow-hidden '>
                <ul className='h-[56px] flex items-center gap-x-6 whitespace-nowrap  flex-1'>
                    <li className='hover:text-black11 cursor-pointer h-full flex items-center '>Wallpapers</li>
                    <li className='hover:text-black11 cursor-pointer h-full flex items-center '>3D Render</li>
                    <li className='hover:text-black11 cursor-pointer h-full flex items-center '>Travel</li>
                    <li className='hover:text-black11 cursor-pointer h-full flex items-center '>Nature</li>
                    <li className='hover:text-black11 cursor-pointer h-full flex items-center '>Street Photography</li>
                    <li className='hover:text-black11 cursor-pointer h-full flex items-center '>Wallpapers</li>
                    <li className='hover:text-black11 cursor-pointer h-full flex items-center '>Wallpapers</li>
                    <li className='hover:text-black11 cursor-pointer h-full flex items-center '>Wallpapers</li>
                    <li className='hover:text-black11 cursor-pointer h-full flex items-center '>Wallpapers</li>
                    <li className='hover:text-black11 cursor-pointer h-full flex items-center '>Wallpapers</li>
                </ul>
            </div>
            <button className='text-2xl '>
                <NextIcon />
            </button>
        </Fragment>
    )
}
