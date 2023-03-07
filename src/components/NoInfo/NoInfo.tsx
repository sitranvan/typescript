import { Link } from 'react-router-dom'
import { LogoIcon } from '../Icons'

export default function NoInfo() {
    return (
        <div className='flex items-center flex-col justify-center mb-10'>
            <img src='/no-info.png' alt='no-info' width={'300px'} />
            <div className='mt-32 flex justify-center flex-col items-center'>
                <Link to={'/'}>
                    <LogoIcon />
                </Link>
                <p className='text-gray76 mt-3'>Make something awesome</p>
            </div>
        </div>
    )
}
