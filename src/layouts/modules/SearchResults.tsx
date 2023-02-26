import React from 'react'

export interface SearchResultsProps {}

export default function SearchResults(props: SearchResultsProps) {
    return (
        <div className='py-3'>
            <p className='px-4 py-2 text-black11 text-[15px] hover:bg-grayEe cursor-pointer'>
                Lorem ipsum dolor consectetur.
            </p>
            <p className='px-4 py-2 text-black11 text-[15px] hover:bg-grayEe cursor-pointer'>
                Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className='px-4 py-2 text-black11 text-[15px] hover:bg-grayEe cursor-pointer'>
                Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className='px-4 py-2 text-black11 text-[15px] hover:bg-grayEe cursor-pointer'>Lorem ipsum</p>
            <p className='px-4 py-2 text-black11 text-[15px] hover:bg-grayEe cursor-pointer'>Lorem ipsum dolor sit</p>
            <p className='px-4 py-2 text-black11 text-[15px] hover:bg-grayEe cursor-pointer'>Lorem</p>
        </div>
    )
}
