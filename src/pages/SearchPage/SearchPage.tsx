import { useParams } from 'react-router-dom'
import TotalResults from './modules/TotalResults'

export interface SearchPageProps {
    children: React.ReactNode
}

export default function SearchPage({ children }: SearchPageProps) {
    const { keyword } = useParams<string>()
    return (
        <div className='px-6'>
            <div
                className='h-[56px] w-[100vw] 
    relative left-[calc(-50vw+50%)] px-8 shadow-[inset_0_-1px_#d1d1d1] flex items-center justify-between'
            >
                <TotalResults />
            </div>
            <div className='w-[1320px] max-w-[100%] px-5 py-10 mx-auto'>
                <h1 className='text-[28px] text-black11 font-bold mb-10 capitalize'>{keyword}</h1>
                {children}
            </div>
        </div>
    )
}
