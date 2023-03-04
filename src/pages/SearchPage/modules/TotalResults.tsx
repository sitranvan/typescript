import { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Context, SearchContext } from '../../../contexts/searchContext'
import { totalList } from '../../../data'

export default function TotalResults() {
    const { keyword } = useParams<string>()
    const { totals }: Context = useContext(SearchContext)
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
                            ? 'text-black11 h-full border-b-[2px] border-black11 flex items-center'
                            : 'h-full flex items-center border-b-[2px] border-transparent'
                    }
                >
                    <div className='flex items-center cursor-pointer hover:text-black11 gap-x-2 capitalize'>
                        {total.icon}
                        {total.label} {total.title(totalsArray[index])}
                    </div>
                </NavLink>
            ))}
        </div>
    )
}
