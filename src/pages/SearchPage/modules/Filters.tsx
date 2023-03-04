import { AiOutlineCaretDown } from 'react-icons/ai'

export default function Filters() {
    return (
        <div className='flex items-center gap-x-6 text-gray76 hover:text-black cursor-pointer'>
            <div className='flex items-center gap-x-1'>
                <span className=''>Any orientation</span>
                <AiOutlineCaretDown />
            </div>
            <div className='flex items-center gap-x-1 text-gray76 hover:text-black cursor-pointer'>
                <div className='flex items-center gap-x-1'>
                    Sort by <span className='text-black11'>Relevance</span>
                </div>
                <AiOutlineCaretDown />
            </div>
        </div>
    )
}
