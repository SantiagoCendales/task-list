import { createContext, useReducer, useState } from 'react'
import { taskReducer } from '../reducers/taskReducer'
import { Task, TaskActions, TaskListContextType } from '../types.d'

export const TaskListContext = createContext<TaskListContextType | null>(null)

const initialState: Task[] = []

export function TaskListProvider ({ children }: {children: React.ReactNode}) {
  const [taskList, dispatch] = useReducer(taskReducer, initialState)

  const addTask = (newTask: Task) => {
    const action = {
      type: TaskActions.ADD_TASK,
      payload: newTask
    }
    dispatch( action );
  }

  const removeTask = (id: string) => {
    dispatch({
      type: TaskActions.REMOVE_TASK,
      payload: id
    })
  }

  const checkTask = (id: string) => {
    dispatch({
      type: TaskActions.CHECK_TASK,
      payload: id
    })
  }

  const editTask = (task: Task) => {
    const action = {
      type: TaskActions.EDIT_TASK,
      payload: task
    }
    dispatch( action );
  }


  return (
    <TaskListContext.Provider value={{
      taskList,
      addTask,
      removeTask,
      checkTask,
      editTask
    }}
    >
      {children}
    </TaskListContext.Provider>
  )
}