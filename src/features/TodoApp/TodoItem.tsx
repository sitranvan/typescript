import { FiEdit, FiTrash } from 'react-icons/fi'
import { MdOutlineDoneOutline } from 'react-icons/md'
import { Todo } from '../../types'

export interface TodoItemProps {
    todo: Todo
    onRemove: (id: string) => void
    onCompleted: (id: string) => void
    onEdit: (todo: Todo) => void
}

export default function TodoItem({ todo, onRemove, onCompleted, onEdit }: TodoItemProps) {
    return (
        <div className='flex items-center justify-between py-[10px] bg-purple-100 px-4 rounded-md'>
            <p className={`text-gray-600 text-base ${todo.completed ? 'line-through' : null}`}>{todo.task}</p>
            <div className='flex items-center gap-x-4 text-xl text-purple-900 [&>*]:cursor-pointer '>
                <FiTrash onClick={() => onRemove(todo.id)} />
                <FiEdit onClick={() => onEdit(todo)} />
                <MdOutlineDoneOutline onClick={() => onCompleted(todo.id)} />
            </div>
        </div>
    )
}
