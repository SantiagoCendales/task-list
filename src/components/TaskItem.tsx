import { useContext, useState } from "react"
import { Task, TaskListContextType } from "../types.d"
import { TaskListContext } from "../context/taskList"
import { RiDeleteBin7Line } from "react-icons/ri"
import { LuEdit2 } from "react-icons/lu"
import { BiCheck } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"
import { useForm } from "../hooks/useForm"

interface TaskItemProps {
  task: Task
}

export const TaskItem: React.FC<TaskItemProps> = ({task}) => {

  const {removeTask, checkTask, editTask} = useContext(TaskListContext) as TaskListContextType
  const [isEditMode, setIsEditMode] = useState(false)
  const {description, onInputChange, onResetForm} = useForm({
    description: task.description
  })
  const handleEditTask = (task: Task) => {
    editTask({
      ...task,
      description
    })
    setIsEditMode(false)
  }

  return (
    <div
      key={task.id}
      className={`
        grid
        grid-cols-10
        gap-1
        md:gap-4
        my-5
        shadow-md
        py-3
        rounded-lg
        ${task.done ? 'border-b-4 border-green-300 md:border-none' : 'border-b-4 border-amber-300 md:border-none'}`}>
      <div className='col-span-2 md:col-span-1'>
        <div className="flex items-center justify-center w-full h-full">
          <label className="container w-fit">
            <input type="checkbox" checked={task.done} onChange={() => checkTask(task.id)} />
            <svg viewBox="0 0 64 64" height="1.5em" width="1.5em">
              <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
            </svg>
          </label>

        </div>
      </div>
      <div className='col-span-5'>
        <div className="flex items-center w-full h-full">
          {
            !isEditMode
            ? (<p>{task.description}</p>)
            : (
              <input
                name="description"
                value={description}
                onChange={onInputChange}
                autoFocus
                type="text" 
                className="border py-1 px-3 rounded-md focus:outline-emerald-200"
              />)
          }
        </div>
        
      </div>
      <div className='col-span-2 text-center hidden md:block'>
        <div className="flex items-center justify-center w-full h-full">
          {
            task.done
            ? (
              <div className='bg-green-200 rounded-full w-fit px-4 py-1 transition'>
                <p className='text-green-500 font-medium'>Terminada</p>
              </div>
            )
            : (
              <div className='bg-amber-200 rounded-full w-fit px-4 py-1 transition'>
                <p className='text-amber-500 font-medium'>Pendiente</p>
              </div>
            )
          }
        </div>
      </div>
      <div className='col-span-2'>
        {
          !isEditMode
          ? (
            <div className="flex gap-0 md:gap-5 justify-center">
              <button className="text-neutral-400 p-2 rounded-xl hover:bg-emerald-100" onClick={() => setIsEditMode(true)}>
                <LuEdit2 size="22" />
              </button>
              <button className="text-neutral-400 p-2 rounded-xl hover:bg-emerald-100" onClick={() => removeTask(task.id)}>
                <RiDeleteBin7Line size="24" />
              </button>
            </div>
          )
          : (
            <div className="flex gap-2 justify-center">
              <button className="text-neutral-400" onClick={() => handleEditTask(task)}>
                <BiCheck size="26" />
              </button>
              <button className="text-neutral-400" onClick={() => setIsEditMode(false)}>
                <IoMdClose size="22" />
              </button>
            </div>
          )
        }
      </div>
    </div>
  )
}
