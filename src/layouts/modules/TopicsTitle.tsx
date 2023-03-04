import { NavLink } from 'react-router-dom'
import { NextIcon, PrevIcon } from '../../components/Icons'
import useGetTopics from '../../hooks/useGetTopics'

export interface TopicsProps {}

export default function TopicsTitle(props: TopicsProps) {
    const topics = useGetTopics()

    return (
        <div className='flex items-center gap-x-6 shadow-[0_4px_12px_#00000014_0_0_1px_#0100001a]'>
            <div className='text-gray76 flex items-center gap-x-6 h-[56px]'>
                <NavLink to='/' className='cursor-pointer hover:text-black11 h-full flex items-center'>
                    Editorial
                </NavLink>
                <span className='cursor-pointer hover:text-black11 h-full flex items-center'>Following</span>
            </div>
            <div className='h-[32px] w-[1px] bg-grayD1 items-center'></div>
            <button className='text-2xl '>
                <PrevIcon />
            </button>
            <div className='flex items-center justify-between text-gray76 flex-1 overflow-hidden '>
                <div className='h-[56px] flex items-center gap-x-6 whitespace-nowrap  flex-1'>
                    {topics.map((topic) => (
                        <NavLink
                            to={`/t/${topic.slug}`}
                            key={topic.id}
                            className='hover:text-black11 cursor-pointer h-full flex items-center'
                        >
                            {topic.title}
                        </NavLink>
                    ))}
                </div>
            </div>
            <button className='text-2xl '>
                <NextIcon />
            </button>
        </div>
    )
}
