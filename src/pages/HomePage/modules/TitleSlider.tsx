import { Fragment } from 'react'

export default function TitleSlider() {
    return (
        <Fragment>
            <h2 className='font-bold text-[46px] text-white'>Unsplash</h2>
            <div className='flex flex-col gap-y-2 text-[18px] text-white my-8'>
                <p>The internet’s source for visuals.</p>
                <p>Powered by creators everywhere.</p>
            </div>
        </Fragment>
    )
}
