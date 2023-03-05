import Skeleton from 'react-loading-skeleton'
import { Photo } from '../../../types'

export interface DetailQuanlityProps {
    loading: boolean
    photo: Photo | undefined
}

export default function DetailQuanlity({ photo, loading }: DetailQuanlityProps) {
    return (
        <div className='flex items-center gap-x-6'>
            <div className='flex flex-col gap-y-[2px] w-[160px]'>
                <span className='text-gray76 '>Views</span>
                {loading ? (
                    <Skeleton width={50} height={20} />
                ) : (
                    <span className='text-black11 text-[15px]'>{photo?.views}</span>
                )}
            </div>
            <div className='flex flex-col gap-y-[2px] w-[160px]'>
                <span className='text-gray76 '>Download</span>
                {loading ? (
                    <Skeleton width={60} height={20} />
                ) : (
                    <span className='text-black11 text-[15px]'>{photo?.downloads}</span>
                )}
            </div>
            <div className='flex flex-col gap-y-[2px] w-[160px]'>
                <span className='text-gray76 '>Featured in</span>
                {loading ? (
                    <Skeleton width={70} height={20} />
                ) : (
                    <span className='text-black11 text-[15px]'>Editorial</span>
                )}
            </div>
        </div>
    )
}
