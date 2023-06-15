import { useContext } from 'react'
import { FilterContext } from '../context/filters'
import { FiltersContextType, Task } from '../types.d'

export const useFilter = () => {
  const { isTaskDone, setIsTaskDone  } = useContext(FilterContext) as FiltersContextType

  const filterTask = (taskList: Task[]) => {
    return taskList.filter((task) => {
      if(isTaskDone === undefined) return taskList
      return task.done === isTaskDone
    })
  }
  return {
    isTaskDone,
    setIsTaskDone,
    filterTask
  }
}
