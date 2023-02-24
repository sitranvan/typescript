import * as React from 'react'
import { v4 } from 'uuid'
import ReactModal from 'react-modal'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import FormEdit from './FormEdit'
import { FcTodoList } from 'react-icons/fc'
import useLocalStorage from '../../hooks/useLocalStorage'
import { Todo } from '../../types'

export default function TodoApp() {
    const refId = React.useRef<string>('')
    const [todos, setTodos] = useLocalStorage<Todo[]>('todos', [])
    const [value, setValue] = React.useState<string>('')
    const [valueEdit, setValueEdit] = React.useState<string>('')
    const [open, setOpen] = React.useState<boolean>(false)

    const handleAddTodo = () => {
        const newTodo: Todo = {
            id: v4(),
            task: value,
            completed: false,
        }
        setTodos([...todos, newTodo])
        setValue('')
    }

    const handleRemove = (id: string) => {
        const newTodos = todos.filter((x) => x.id !== id)
        setTodos(newTodos)
    }

    const handleCompleted = (id: string) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        })
        setTodos(newTodos)
    }

    const handleEdit = (todo: Todo) => {
        setValueEdit(todo.task)
        refId.current = todo.id
        setOpen(!open)
    }

    const handleUpdate = () => {
        const newTodos = todos.map((todo) => {
            if (todo.id === refId.current) {
                return { ...todo, task: valueEdit }
            }
            return todo
        })
        setTodos(newTodos)
        setOpen(!open)
    }

    const hanldeClose = () => {
        setOpen(!open)
    }

    return (
        <div className='mt-10'>
            <div className='w-[500px] bg-white  shadow rounded-lg mx-auto  px-6'>
                <ReactModal
                    isOpen={open}
                    className='w-[500px] mx-auto mt-20 shadow p-6 rounded-lg bg-blue-300 border-none outline-none'
                >
                    <FormEdit
                        onSubmit={handleUpdate}
                        valueEdit={valueEdit}
                        setValueEdit={setValueEdit}
                        onClose={hanldeClose}
                    />
                </ReactModal>
                <div className='flex items-center gap-x-3 text-purple-900 mb-3'>
                    <h1 className='text-center py-5 font-bold text-3xl mt-2'>Todo Simple</h1>
                    <FcTodoList fontSize='30px' className='mt-2' />
                </div>
                <TodoForm value={value} setValue={setValue} onSubmit={handleAddTodo} />
                <div className='py-8 flex flex-col gap-y-3 px-2'>
                    {todos.length > 0 &&
                        todos.map((todo) => (
                            <TodoItem
                                onRemove={handleRemove}
                                onCompleted={handleCompleted}
                                onEdit={handleEdit}
                                key={todo.id}
                                todo={todo}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}
