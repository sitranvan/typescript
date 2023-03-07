import { useContext } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { PuffLoader } from 'react-spinners'
import NoInfo from '../../../components/NoInfo'
import PhotoList from '../../../components/PhotoList'
import { AuthorContext, Context } from '../../../contexts/authorContext'

export default function AuthorLike() {
    const { likesUser, loading, fetchLikesUser }: Context = useContext(AuthorContext)

    return (
        <InfiniteScroll dataLength={likesUser.length} next={fetchLikesUser} hasMore={true} loader={''}>
            {loading && (
                <div className='text-gray76 mx-auto flex justify-center mb-14'>
                    <PuffLoader color='#757575' />
                </div>
            )}
            <div className='grid-photo'>
                <PhotoList photos={likesUser} loading={loading} />
            </div>
            {likesUser.length <= 0 && <NoInfo />}
        </InfiniteScroll>
    )
}
