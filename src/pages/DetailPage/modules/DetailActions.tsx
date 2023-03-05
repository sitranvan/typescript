import ButtonActions from '../../../components/ButtonActions/ButtonActions'
import { actionList } from '../../../data'

export default function DetailActions() {
    return (
        <div className='flex items-center gap-x-2'>
            {actionList.map((action, index) => (
                <ButtonActions key={index} className='border'>
                    {action.children}
                </ButtonActions>
            ))}
        </div>
    )
}
