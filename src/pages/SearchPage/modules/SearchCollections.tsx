import { useContext } from 'react'
import { Context, SearchContext } from '../../../contexts/searchContext'
import SearchPage from '../SearchPage'
import SearchCollectionsInfo from './SearchCollectionsInfo'
import SearchCollectionsPreview from './SearchCollectionsPreview'

export default function SearchCollections() {
    const { collections }: Context = useContext(SearchContext)
    return (
        <SearchPage>
            <div className='grid grid-cols-3 gap-x-6 gap-y-12'>
                {collections.length > 0 &&
                    collections.map((collection) => (
                        <div key={collection.id} className=''>
                            <SearchCollectionsPreview collection={collection} />
                            <SearchCollectionsInfo collection={collection} />
                        </div>
                    ))}
            </div>
        </SearchPage>
    )
}
