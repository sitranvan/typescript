import React, { useRef, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { MdOutlineClear } from 'react-icons/md'
import Button from '../../components/Button/Button'
import { BellIcon, LogoIcon, VisualSearch } from '../../components/Icons'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import SearchResults from './SearchResults'
import Topics from './Topics'
export default function Header() {
    const [valueSearch, setValueSearch] = useState<string>('')
    const [openSearch, setOpenSearch] = useState<Boolean>(false)
    const refSearch = useRef<HTMLInputElement>(null)
    useOnClickOutside(refSearch, () => setOpenSearch(false))
    const handleFocus = () => {
        setOpenSearch(true)
    }
    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(e.target.value)
    }

    const handleClearInput = () => {
        setValueSearch('')
    }
    return (
        <div className='px-6 bg-white '>
            <div className='flex items-center justify-between gap-x-10 py-3'>
                {/* Logo */}
                <div className='flex items-center'>
                    <LogoIcon />
                </div>
                {/* Center */}
                <div className='flex items-center flex-1 w-full justify-between '>
                    <div className='flex items-center relative w-full rounded-full h-[40px]'>
                        <button className='absolute text-gray76 text-xl ml-4'>
                            <BiSearch />
                        </button>
                        <input
                            value={valueSearch}
                            onClick={handleFocus}
                            onChange={handleChangeSearch}
                            type='text'
                            placeholder='Search high-resolution images'
                            className='w-full border  h-full rounded-full pl-12 pr-[92px] bg-grayEe text-black11 text-sm placeholder:text-gray76'
                        />

                        <div className='flex items-center gap-x-3 absolute right-0 mr-5'>
                            {valueSearch.trim() && (
                                <button className='text-gray76 text-[15px]' onClick={handleClearInput}>
                                    <MdOutlineClear />
                                </button>
                            )}
                            <span className='w-[1px] h-4 bg-grayD1'></span>
                            <button className='text-gray76 text-xl'>
                                <VisualSearch />
                            </button>
                        </div>

                        {/* Search result */}
                        {openSearch && (
                            <div
                                ref={refSearch}
                                className='absolute top-[110%]  rounded border border-grayD9 shadow-[0_2px_4px_#0000001f] left-0 right-0  bg-white'
                            >
                                {/* <TrendingSearch /> */}
                                <SearchResults />
                            </div>
                        )}
                    </div>

                    <div className='flex items-center justify-center flex-shrink-0 ml-6 gap-x-6'>
                        <div className='flex items-center font-medium text-gray76 gap-x-6'>
                            <a href='/'>Advertise</a>
                            <a href='/'>Blog</a>
                            <a className='text-gradient' href='/'>
                                Unsplash+
                            </a>
                        </div>
                        <Button>Submit a photo</Button>
                    </div>
                </div>
                {/* Header right */}
                <div className='flex items-center gap-x-6 text-xl text-gray76'>
                    <button>
                        <BellIcon />
                    </button>
                    <img
                        src='https://images.unsplash.com/photo-1677297680174-63fea98df131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                        alt=''
                        className='w-8 h-8 rounded-full'
                    />
                    <button>
                        <FaBars />
                    </button>
                </div>
            </div>
            <div className='flex items-center gap-x-6 shadow-[0_4px_12px_#00000014_0_0_1px_#0100001a;]'>
                <Topics />
            </div>
        </div>
    )
}
