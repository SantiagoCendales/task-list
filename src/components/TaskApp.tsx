import { useContext, useReducer, useState } from "react"
import './Task.css'
import { TaskList } from "./TaskList"
import { taskReducer } from "../reducers/taskReducer"
import { Task, TaskActions } from "../types.d"
import { TaskInput } from "./TaskInput"
import { TaskListContext, TaskListProvider } from "../context/taskList"
import { FilterProvider } from "../context/filters"

const initialState: Task[] = []

interface TaskAppProps {
  title?: string
}
export const TaskApp: React.FC<TaskAppProps> = ({title}) => {


  const [isDone, setIsDone] = useState<boolean>()

  const filteredTask = (taskList: Task[]) => {
    console.log(isDone)
    if(isDone === undefined) return taskList
    return taskList.filter(task => task.done === isDone )
  }

  const handleFilters = (isDone?: boolean) => { 
    setIsDone(isDone)
  }

  return (
    <TaskListProvider>
      <FilterProvider>
        <div className='w-full pt-4'>
          <div className='bg-white rounded-md shadow-lg px-4 py-10'>
            {
              title && (
                <div className="w-full text-center mb-4">
                  <h2 className="text-lg font-medium">{title}</h2>
                </div>
              )
            }
            <TaskInput />
            <hr className='my-5' />

            <TaskList /> 
          </div>
        </div>
      </FilterProvider>
    </TaskListProvider>
  )
}
