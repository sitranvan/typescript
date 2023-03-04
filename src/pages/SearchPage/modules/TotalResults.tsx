import { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Context, SearchContext } from '../../../contexts/searchContext'
import { totalList } from '../../../data'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function TotalResults() {
    const { keyword } = useParams<string>()
    const { totals, loading }: Context = useContext(SearchContext)
    const totalsArray = Object.values(totals).map((value) => {
        return value
    })

    return (
        <div className='flex items-center gap-x-6 h-full'>
            {totalList.map((total, index) => (
                <NavLink
                    key={index}
                    to={total.path(keyword)}
                    className={({ isActive }) =>
                        isActive
                            ? ' h-full border-b-[3px] text-black11 border-black11 flex items-center'
                            : 'h-full flex items-center border-b-[3px] border-transparent text-gray76'
                    }
                >
                    <div className='flex items-center cursor-pointer text-inherit hover:text-black11 gap-x-2 capitalize'>
                        {total.icon}

                        {total.label}
                        {loading ? (
                            <span className=' inline-block mb-[2px]'>
                                <Skeleton height={16} width={30} />
                            </span>
                        ) : (
                            <span>{total.title(totalsArray[index])}</span>
                        )}
                    </div>
                </NavLink>
            ))}
        </div>
    )
}
