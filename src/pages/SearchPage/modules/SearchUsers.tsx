import { useContext } from 'react'
import PreviewUser from '../../../components/PreviewUser'
import SearchPage from '../SearchPage'
import { Context, SearchContext } from '../../../contexts/searchContext'
import InfiniteScroll from 'react-infinite-scroll-component'
import { PuffLoader } from 'react-spinners'
import Skeleton from 'react-loading-skeleton'

export default function SearchUsers() {
    const { users, fetchUsers, loading }: Context = useContext(SearchContext)

    return (
        <SearchPage>
            <InfiniteScroll
                dataLength={users.length}
                next={fetchUsers}
                hasMore={true}
                loader={<PuffLoader className='mx-auto mt-5' color='#767676' />}
            >
                <div className='grid grid-cols-3 gap-6'>
                    {users.length > 0 &&
                        users.map((user) => {
                            if (loading) {
                                return <Skeleton height={200} />
                            } else {
                                return <PreviewUser key={user.id} user={user} />
                            }
                        })}
                </div>
            </InfiniteScroll>
        </SearchPage>
    )
}
