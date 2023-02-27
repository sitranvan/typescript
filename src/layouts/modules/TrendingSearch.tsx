import { TrendingIcon } from '../../components/Icons'

export interface TrendingSearchProps {}

export default function TrendingSearch(props: TrendingSearchProps) {
    return (
        <div className='p-4'>
            <div className=''>
                <h2 className='font-secondary text-base text-black11'>Trending Searches</h2>
                <div className='flex items-center gap-x-2 mt-2'>
                    <div className='hover:bg-grayEe cursor-pointer  items-center gap-x-2 h-[38px] min-w-[101px] flex justify-center text-gray76 text-[15px] border border-grayD9 rounded'>
                        <TrendingIcon />
                        <span>flower</span>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <h2 className='font-secondary text-base text-black11'>Trending Topics</h2>
                <div className='flex items-center gap-x-2 mt-2'>
                    <div className='hover:bg-grayEe cursor-pointer  items-center gap-x-2 h-[38px] min-w-[101px] flex justify-between text-gray76 text-[15px] border border-grayD9 rounded'>
                        <img
                            className='w-[38px] h-full'
                            src='https://images.unsplash.com/photo-1674574124475-16dd78234342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                            alt=''
                        />
                        <span className='pl-2 pr-4'>flower flow</span>
                    </div>
                </div>
            </div>

            <div className='mt-6'>
                <h2 className='font-secondary text-base text-black11'>Trending Collections</h2>
                <div className='flex items-center gap-x-2 mt-2'>
                    <div className='hover:bg-grayEe cursor-pointer  items-center gap-x-2 h-[38px] min-w-[101px] flex justify-center text-gray76 text-[15px] border border-grayD9 rounded'>
                        <TrendingIcon />
                        <span>flower</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
