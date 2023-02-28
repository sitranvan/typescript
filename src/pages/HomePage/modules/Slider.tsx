import TextInfoUser from './TextInfoUser'

export interface SliderProps {
    children: JSX.Element
    className?: string
    sliderImg?: string
    photoBy: string
}

export default function Slider({ children, className, sliderImg, photoBy }: SliderProps) {
    return (
        <div
            style={{
                backgroundImage: `url(${sliderImg}`,
            }}
            className='h-[565px] bg-cover bg-no-repeat relative '
        >
            <div className='bg-black11 absolute inset-0 bg-opacity-50'></div>
            <div className={`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-2/3 px-24 ${className}`}>
                {children}
            </div>
            <TextInfoUser photoBy={photoBy} />
        </div>
    )
}
