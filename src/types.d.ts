export interface Task {
  id: string,
  description: string
  done: boolean
}

export enum TaskActions {
  ADD_TASK= 'ADD_TASK',
  REMOVE_TASK= 'REMOVE_TASK',
  CHECK_TASK = 'CHECK_TASK',
  EDIT_TASK = 'EDIT_TASK'
}

export interface TaskListContextType {
  taskList: Task[]
  addTask: (newTask: Task) => void
  removeTask: (id: string) => void
  checkTask: (id: string) => void
  editTask: (task: Task) => void
}