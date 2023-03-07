import { Link } from 'react-router-dom'
import { LogoIconWhite } from '../Icons/icons'

export default function NotFound() {
    return (
        <div className='w-screen h-screen bg-black11 p-8 '>
            <Link to={'/'}>
                <LogoIconWhite />
            </Link>
            <div className='flex items-center flex-col gap-y-12 justify-center h-full text-white'>
                <img src='/404.png' alt='' className='h-32 object-cover' />
                <h1 className='text-[64px] font-bold text-shadow '>Page not found</h1>
                <p>Hmm, the page you were looking for doesn’t seem to exist anymore.</p>
                <Link to={'/'} className='py-4 px-8 bg-white rounded text-black11'>
                    Back to Unsplash
                </Link>
            </div>
        </div>
    )
}
