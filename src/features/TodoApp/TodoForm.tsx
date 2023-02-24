import * as React from 'react'
import { BsBookmarkPlus } from 'react-icons/bs'

export interface TodoFormProps {
    onSubmit: () => void
    value: string
    setValue: (value: string) => void
}

export default function TodoForm({ onSubmit, value, setValue }: TodoFormProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit()
    }
    return (
        <form onSubmit={handleSubmit} className='w-full relative '>
            <input
                className='w-full outline-none pl-6 pr-28 py-3 rounded-lg text-gray-600 shadow border border-gray-100'
                type='text'
                onChange={handleChange}
                value={value}
                placeholder='Enter your todo...'
            />
            <button
                type='submit'
                className='absolute shadow top-0 right-0 h-full text-2xl bg-purple-900 px-8 flex justify-center items-center rounded-r-lg text-white cursor-pointer'
            >
                <BsBookmarkPlus />
            </button>
        </form>
    )
}
