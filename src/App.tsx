import './App.css'
import { TaskApp } from './components/TaskApp'
import { TaskListProvider } from './context/taskList'

function App() {


  return (
    <div className='px-3 lg:px-0 lg:w-3/4 xl:w-[800px] m-auto'>
      <TaskApp title='Lista de pendientes' />
    </div>
  )
}

export default App
