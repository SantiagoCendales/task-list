import { Task, TaskActions } from "../types.d"

interface Action {
  type: string
  payload: any
}

export const taskReducer = (state: Task[], action: Action) => {


  switch (action.type) {
    case TaskActions.ADD_TASK:
      return [...state, action.payload]

    case TaskActions.REMOVE_TASK:
      return state.filter( task => task.id !== action.payload )

    case TaskActions.CHECK_TASK:
      return state.map( task => {
        if ( task.id === action.payload ) {
            return {
                ...task,
                done: !task.done
            }
        } 

        return task;
    });

    case TaskActions.EDIT_TASK:
      return state.map( task => {
        if ( task.id === action.payload.id ) {
            return {
                ...task,
                description: action.payload.description
            }
        } 

        return task;
    });

    default:
      return state;
  }
}