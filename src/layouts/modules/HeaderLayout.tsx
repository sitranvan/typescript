import { FaBars } from 'react-icons/fa'
import Button from '../../components/Button'
import { BellIcon, LogoIcon } from '../../components/Icons'
import Search from '../../components/Search'
import { NavLink } from 'react-router-dom'

export interface HeaderLayoutProps {
    children?: JSX.Element
}

export default function HeaderLayout({ children }: HeaderLayoutProps) {
    return (
        <div className='px-6 bg-white '>
            <div className='flex items-center justify-between gap-x-10 py-3'>
                {/* Logo */}
                <NavLink to='/' className='flex items-center cursor-pointer'>
                    <LogoIcon />
                </NavLink>
                {/* Center */}
                <div className='flex items-center flex-1 w-full justify-between '>
                    <Search rounded='full' />

                    <div className='flex items-center justify-center flex-shrink-0 ml-6 gap-x-6'>
                        <div className='flex items-center font-medium text-gray76 gap-x-6'>
                            <a href='/'>Advertise</a>
                            <a href='/'>Blog</a>
                            <a className='text-gradient' href='/'>
                                Unsplash+
                            </a>
                        </div>
                        <Button>Submit a photo</Button>
                    </div>
                </div>
                {/* Header right */}
                <div className='flex items-center gap-x-6 text-xl text-gray76'>
                    <button>
                        <BellIcon />
                    </button>
                    <img
                        src='https://images.unsplash.com/photo-1677297680174-63fea98df131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                        alt=''
                        className='w-8 h-8 rounded-full'
                    />
                    <button>
                        <FaBars />
                    </button>
                </div>
            </div>
            {children}
        </div>
    )
}
