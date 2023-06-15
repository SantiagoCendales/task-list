import React, { useContext } from 'react'
import { TaskListContextType } from '../types.d'
import { TaskListContext } from '../context/taskList'
import { useForm } from '../hooks/useForm';

export const TaskInput= () => {

  const { addTask } = useContext(TaskListContext) as TaskListContextType
  
  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newTask = {
      id: crypto.randomUUID(),
      description: description,
      done: false
    }
    addTask(newTask)
    onResetForm()
  }

  return (
    <div className='relative w-full'>
      <form onSubmit={onHandleSubmit}>
        <input
          name="description"
          value={description}
          onChange={onInputChange}
          placeholder="Comprar tomates, etc..."
          type="text"
          className="
            w-full
            bg-neutral-100
            pr-32
            border
            rounded-full
            py-[12px]
            px-4
            focus:outline-emerald-200"
        />
        <button
          className='absolute top-[5px] right-1 bg-emerald-500 rounded-full px-6 py-2 outline-none'
        >
            Agregar
        </button>
      </form>
    </div>
  )
}
