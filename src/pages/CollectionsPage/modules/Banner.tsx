import { useParams } from 'react-router-dom'
import ButtonActions from '../../../components/ButtonActions/ButtonActions'
import { DotMoreIcon, ShareIcon } from '../../../components/Icons'
import UserInfo from '../../../components/UserInfo/UserInfo'
import { ListPhoto } from '../../../types'

export interface BannerProps {
    photo: ListPhoto | undefined
}

export default function Banner({ photo }: BannerProps) {
    const { title } = useParams<string>()

    return (
        <div
            className='h-[232px] w-[100vw] 
    relative left-[calc(-50vw+50%)] bg-no-repeat bg-cover mx-auto'
            style={{
                backgroundImage: `url(${photo?.urls.regular})`,
            }}
        >
            <div className='absolute inset-0 bg-gradient'></div>
            <div className='w-[1280px] h-full left-1/2 -translate-x-1/2  px-8 flex items-center absolute z-10 justify-between'>
                <div className=''>
                    <h1 className='text-[46px] font-bold text-black11 mb-8'>{title}</h1>
                    <UserInfo photo={photo} />
                </div>
                <div className='flex items-center gap-x-2'>
                    <ButtonActions className='border'>
                        <span className='flex items-center gap-x-1 text-gray76'>
                            <ShareIcon />
                            Share
                        </span>
                    </ButtonActions>
                    <ButtonActions className='border'>
                        <DotMoreIcon />
                    </ButtonActions>
                </div>
            </div>
        </div>
    )
}
