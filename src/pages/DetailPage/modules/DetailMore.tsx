import ButtonActions from '../../../components/ButtonActions/ButtonActions'
import { detailMore } from '../../../data'

export default function DetailMore() {
    return (
        <div className='flex items-center gap-x-2'>
            {detailMore.map((more, index) => (
                <ButtonActions key={index} className='border'>
                    {more.children}
                </ButtonActions>
            ))}
        </div>
    )
}
