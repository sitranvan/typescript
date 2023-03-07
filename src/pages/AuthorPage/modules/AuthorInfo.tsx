import { useRef, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ButtonActions from '../../../components/ButtonActions/ButtonActions'
import { ConnectIcon, DotMoreIcon, LocationFillIcon, MessageIcon } from '../../../components/Icons'
import { userConnectList } from '../../../data'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import { UserProfile } from '../../../types'
import AuthorTags from './AuthorTags'

export interface AuthorInfoProps {
    user: UserProfile | undefined
}

export default function AuthorInfo({ user }: AuthorInfoProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState<boolean>(false)
    const handleConnect = () => {
        setOpen(true)
    }
    useOnClickOutside(ref, () => setOpen(false))
    return (
        <div className='py-[56px] flex justify-center gap-x-14'>
            <img src={user?.profile_image.large} alt='' className='w-[150px] h-[150px] object-cover rounded-full' />
            <div className=''>
                <div className='flex items-center gap-x-5'>
                    <h1 className='text-[40px] font-bold text-black11'>{user?.name}</h1>
                    <div className='flex items-center gap-x-2 text-gray76'>
                        {user?.allow_messages && (
                            <ButtonActions className='border border-grayD1 '>
                                <MessageIcon />
                            </ButtonActions>
                        )}
                        <ButtonActions className='border border-grayD1'>
                            <DotMoreIcon />
                        </ButtonActions>
                    </div>
                </div>
                <p className='text-black11 mt-4'>{user?.bio}</p>
                <div className='text-gray76 mt-4 flex flex-col  gap-y-2'>
                    <div className='flex items-center gap-x-1 hover:text-black11 cursor-pointer transition-all'>
                        <LocationFillIcon />
                        {user?.location || 'Not update'}
                    </div>
                    {user?.social.instagram_username !== null && (
                        <div className='relative'>
                            <div
                                className={`flex items-center gap-x-1 hover:text-black11 cursor-pointer transition-all ${
                                    open && 'pointer-events-none'
                                }`}
                                onClick={handleConnect}
                            >
                                <ConnectIcon />
                                Connect width {user?.first_name}
                                <AiFillCaretDown />
                            </div>
                            {open && (
                                <div
                                    ref={ref}
                                    className='absolute max-w-[300px] py-2 top-[150%] border border-grayD1 -left-14 z-30 bg-white shadow-[0_8px_16px_#00000029] rounded-sm'
                                >
                                    {userConnectList.map((item) => (
                                        <Link
                                            onClick={() => setOpen(false)}
                                            key={item.title}
                                            target='_blank'
                                            to={user?.portfolio_url || user?.social.portfolio_url || ''}
                                            className='text-[#555555] hover:text-black11 transition-all  flex items-center hover:bg-grayEe'
                                        >
                                            <p className='flex items-center px-4 py-2 gap-x-2 w-full'>
                                                {item.icon}
                                                {item.username ? `${item.title}/${user?.username}` : item.title}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <p className='mt-4'>Interests</p>
                <AuthorTags user={user} />
            </div>
        </div>
    )
}
