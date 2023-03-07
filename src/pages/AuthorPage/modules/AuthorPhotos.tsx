import { useContext } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import PuffLoader from 'react-spinners/PuffLoader'
import NoInfo from '../../../components/NoInfo'
import PhotoList from '../../../components/PhotoList'
import { AuthorContext, Context } from '../../../contexts/authorContext'
export interface AuthorPhotosProps {}

export default function AuthorPhotos(props: AuthorPhotosProps) {
    const { photosUser, loading, fetchPhotosUser }: Context = useContext(AuthorContext)
    return (
        <InfiniteScroll dataLength={photosUser.length} next={fetchPhotosUser} hasMore={true} loader={''}>
            {loading && (
                <div className='text-gray76 mx-auto flex justify-center mb-14'>
                    <PuffLoader color='#757575' />
                </div>
            )}
            <div className='grid-photo'>
                <PhotoList photos={photosUser} loading={loading} />
            </div>
            {photosUser.length <= 0 && <NoInfo />}
        </InfiniteScroll>
    )
}
