export default function Banner() {
    return (
        <div className=' bg-black1d h-[180px] flex items-center justify-between px-9  my-[50px]'>
            <div className='flex-1'>
                <img src='./letters-gif.gif' alt='' className='w-[220px]' />
            </div>
            <div className='text-white flex flex-col gap-y-3 items-center justify-center flex-2'>
                <h2 className='text-[28px] font-bold '>Unsplash Census 2023</h2>
                <p className='opacity-80 text-[18px] font-medium mt-2'>Help us make Unsplash better for you ❤️</p>
                <span className='underline text-[18px]'>Learn more</span>
            </div>
            <div className='flex-1 flex justify-end'>
                <img src='./check-gif.gif' alt='' className='w-[80px] ' />
            </div>
        </div>
    )
}
