import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { MdOutlineClear } from 'react-icons/md'
import { VisualSearch } from '../Icons'

export interface SearchProps {
    onSubmitSearch: (value: string) => void
    className?: string
    rounded?: 'full'
}

export default function Search({ onSubmitSearch, className, rounded }: SearchProps) {
    const [valueSearch, setValueSearch] = useState<string>('')

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(e.target.value)
    }
    const handleClearInput = () => {
        setValueSearch('')
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmitSearch(valueSearch)
    }
    return (
        <form
            onSubmit={handleSubmit}
            className={`flex items-center relative w-full ${rounded ? 'rounded-full' : 'rounded'} h-[40px] ${className}
            }]`}
        >
            <button className='absolute text-gray76 text-xl ml-4'>
                <BiSearch />
            </button>
            <input
                value={valueSearch}
                onChange={handleChangeSearch}
                type='text'
                placeholder='Search high-resolution images'
                className={`w-full border  h-full ${rounded ? 'rounded-full' : 'rounded'}
                } pl-12 pr-[92px] bg-grayEe text-black11 text-sm placeholder:text-gray76`}
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
        </form>
    )
}
