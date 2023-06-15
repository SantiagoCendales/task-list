import { useContext } from "react"
import { EmptyTaskList } from "./EmptyTaskList"
import { TaskItem } from "./TaskItem"
import { TaskListContext } from "../context/taskList"
import { TaskListContextType } from "../types.d"
import { Filter } from "./Filter"
import { useFilter } from "../hooks/useFilter"

export const TaskList: React.FC = () => {

  const { filterTask } = useFilter()

  const {taskList} = useContext(TaskListContext) as TaskListContextType

  const filteredTaskList = filterTask(taskList)

  return (
    <div>
      <div className="flex flex-col gap-3 items-center justify-between md:flex-row">
        <h6 className='font-semibold text-sm'>Lista de tareas</h6>
        <Filter />
      </div>
      {
        filteredTaskList.length > 0
        ? filteredTaskList.map(task => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))
        : <EmptyTaskList />
      }
    </div>

    
  )
}
