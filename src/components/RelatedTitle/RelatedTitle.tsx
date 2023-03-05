export interface RelatedTitleProps {
    children: React.ReactNode
}

export default function RelatedTitle({ children }: RelatedTitleProps) {
    return <div className='text-[18px] text-black11 font-medium pt-[60px] pb-4'>{children}</div>
}
