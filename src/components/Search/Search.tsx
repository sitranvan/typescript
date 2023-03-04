import React, { useContext } from 'react'
import { BiSearch } from 'react-icons/bi'
import { MdOutlineClear } from 'react-icons/md'
import { Context, SearchContext } from '../../contexts/searchContext'
import { VisualSearch } from '../Icons'
import { useNavigate, useParams } from 'react-router-dom'

export interface SearchProps {
    className?: string
    rounded?: 'full'
}

export default function Search({ className, rounded }: SearchProps) {
    const { value, setValue, handleSubmit }: Context = useContext(SearchContext)
    const navigate = useNavigate()
    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const handleClearInput = () => {
        setValue('')
    }
    const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
        handleSubmit(e)
        navigate(`/s/photos/${value}`)
    }

    return (
        <form
            onSubmit={handleSubmitForm}
            className={`flex items-center relative w-full ${rounded ? 'rounded-full' : 'rounded'} h-[40px] ${className}
            }]`}
        >
            <button className='absolute text-gray76 text-xl ml-4'>
                <BiSearch />
            </button>
            <input
                value={value}
                onChange={handleChangeSearch}
                type='text'
                placeholder='Search high-resolution images'
                className={`w-full border  h-full ${rounded ? 'rounded-full' : 'rounded'}
                } pl-12 pr-[92px] bg-grayEe text-black11 text-sm placeholder:text-gray76`}
            />

            <div className='flex items-center gap-x-3 absolute right-0 mr-5'>
                {value.trim() && (
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
