import * as React from 'react'
import { BiCommentEdit } from 'react-icons/bi'
import { BsBookmarkCheck } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
export interface FormEditProps {
    onSubmit: () => void
    onClose: () => void
    valueEdit: string
    setValueEdit: (valueEdit: string) => void
}

export default function FormEdit({ onSubmit, onClose, valueEdit, setValueEdit }: FormEditProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueEdit(e.target.value)
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit()
    }
    return (
        <div className='relative'>
            <div className='flex items-center gap-x-2 mb-4 '>
                <h2 className='text-gray-700 font-bold text-xl uppercase  tracking-wide'>Edit Todo</h2>
                <span className='text-xl'>
                    <BiCommentEdit />
                </span>
            </div>
            <span
                onClick={onClose}
                className='text-2xl absolute top-0 right-0 -translate-y-2 text-gray-700 cursor-pointer hover:opacity-75'
            >
                <CgClose />
            </span>
            <form className='w-full relative' onSubmit={handleSubmit}>
                <input
                    className='w-full outline-none pl-6 pr-28 py-3 rounded-lg text-gray-600 '
                    type='text'
                    placeholder='Enter your todo...'
                    value={valueEdit}
                    onChange={handleChange}
                />
                <button
                    type='submit'
                    className='absolute top-0 right-0 h-full text-2xl bg-gray-700 px-8 flex justify-center items-center rounded-r-lg text-white cursor-pointer'
                >
                    <BsBookmarkCheck />
                </button>
            </form>
        </div>
    )
}
