import { useContext } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Skeleton from 'react-loading-skeleton'
import PreviewUser from '../../../components/PreviewUser'
import { Context, SearchContext } from '../../../contexts/searchContext'
import SearchPage from '../SearchPage'
import NoInfo from '../../../components/NoInfo/NoInfo'

export default function SearchUsers() {
    const { users, fetchUsers, loading }: Context = useContext(SearchContext)

    return (
        <SearchPage>
            <InfiniteScroll dataLength={users.length} next={fetchUsers} hasMore={true} loader={''}>
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
                {users.length <= 0 && <NoInfo />}
            </InfiniteScroll>
        </SearchPage>
    )
}
