export default function TextInfo() {
    return (
        <div className='text-gray8c text-[13px] flex items-end absolute bottom-5 justify-between w-full px-5'>
            <p className='flex items-center gap-x-1'>
                <span className='text-whiteCc'>Photo</span> by <span className='text-whiteCc'>Rajat Kashyap</span>
            </p>
            <p className='flex items-center gap-x-1'>
                Read more about the <span className='text-whiteCc'>Unsplash License</span>
            </p>
            <div className='text-whiteCc flex flex-col gap-y-3'>
                <img src='https://images.unsplash.com/file-1606177908946-d1eed1cbe4f5image' alt='' />
                <p>Create your website today.</p>
            </div>
        </div>
    )
}
