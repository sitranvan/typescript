import { useParams } from 'react-router-dom'
import Filters from './modules/Filters'
import TotalResults from './modules/TotalResults'

export interface SearchPageProps {
    children: React.ReactNode
}

export default function SearchPage({ children }: SearchPageProps) {
    const { keyword } = useParams<string>()
    return (
        <div className='px-6'>
            <div className='h-[56px] shadow-[inset_0_-1px_#d1d1d1] flex items-center justify-between'>
                <TotalResults />
                <Filters />
            </div>
            <div className='w-[1320px] px-5 py-10 mx-auto'>
                <h1 className='text-[28px] text-black11 font-bold mb-10 capitalize'>{keyword}</h1>
                {children}
            </div>
        </div>
    )
}
