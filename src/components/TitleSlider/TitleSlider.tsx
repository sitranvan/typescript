import { Fragment } from 'react'

export interface TitleSliderProps {
    marginY?: string
    desc?: string
}

export default function TitleSlider({ marginY, desc }: TitleSliderProps) {
    return (
        <Fragment>
            <h2 className='font-bold text-[46px] text-white'>Unsplash</h2>
            <div className={`flex flex-col gap-y-2 text-[18px] text-white my-8 ${marginY}`}>
                {!desc ? (
                    <Fragment>
                        <p>The internet’s source for visuals.</p>
                        <p>Powered by creators everywhere.</p>
                    </Fragment>
                ) : (
                    <p className='max-w-[600px] leading-8'>{desc}</p>
                )}
            </div>
        </Fragment>
    )
}
