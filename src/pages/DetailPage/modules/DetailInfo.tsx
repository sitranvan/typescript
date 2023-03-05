import { Fragment } from 'react'
import { CameraIcon, LicenseIcon, LocationIcon, PublishedIcon } from '../../../components/Icons'
import { formatDate } from '../../../utils/formatDate'
import { Photo } from '../../../types'
import Skeleton from 'react-loading-skeleton'

export interface DetailInfoProps {
    loading: boolean
    photo: Photo | undefined
}

export default function DetailInfo({ photo, loading }: DetailInfoProps) {
    return (
        <div className='text-gray76 flex gap-y-2 flex-col mt-8'>
            {loading ? (
                <Fragment>
                    {Array(4)
                        .fill(0)
                        .map((item, index) => (
                            <Skeleton key={index} width={150} />
                        ))}
                </Fragment>
            ) : (
                <Fragment>
                    <p className='flex items-center gap-x-2'>
                        <LocationIcon />
                        <span>{photo?.location.name || 'Not update'}</span>
                    </p>
                    <p className='flex items-center gap-x-2'>
                        <PublishedIcon />
                        <span>Published {formatDate(photo?.created_at || '')}</span>
                    </p>
                    <p className='flex items-center gap-x-2'>
                        <CameraIcon />
                        <span>{photo?.exif.name || 'Not update'}</span>
                    </p>
                    <p className='flex items-center gap-x-2'>
                        <LicenseIcon />
                        <span>Free to use under the Unsplash License</span>
                    </p>
                </Fragment>
            )}
        </div>
    )
}
