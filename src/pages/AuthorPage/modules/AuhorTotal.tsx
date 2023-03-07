import Skeleton from 'react-loading-skeleton'
import { NavLink, useParams } from 'react-router-dom'
import { totalListUser } from '../../../data'
import queryString from 'query-string'

export interface AuthorTotalProps {
    totals: []
    loading: boolean
}

export default function AuthorTotal({ totals, loading }: AuthorTotalProps) {
    const { username } = useParams<string>()
    const totalsArray = Object.values(totals).map((value) => {
        return value
    })

    return (
        <div
            className='h-[56px] shadow-[inset_0_-1px_#d1d1d1] flex items-center gap-x-8 px-8 w-[100vw] 
                    relative left-[calc(-50vw+50%)]'
        >
            {totalListUser.map((total, index) => (
                <NavLink
                    key={total.label}
                    to={`${total.path(username)}/${total.url}`}
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
