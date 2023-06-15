import { useFilter } from '../hooks/useFilter'

export const Filter = () => {
  const {isTaskDone, setIsTaskDone} = useFilter()
  return (
    <div className='flex gap-3'>
      <div 
        className={
          `border 
          border-neutral-300 
          rounded-full
          px-4
          py-0.5
          hover:bg-emerald-400
          hover:border-emerald-400 cursor-pointer transition duration-300
          ${isTaskDone === undefined ? 'bg-emerald-400' : ''}`
        } 
          onClick={() => setIsTaskDone(undefined)}>
        <p>Todos</p>
      </div>
      <div 
        className={
          `border 
          border-neutral-300 
          rounded-full
          px-4
          py-0.5
          hover:bg-emerald-400
          hover:border-emerald-400 cursor-pointer transition duration-300
          ${isTaskDone ? 'bg-emerald-400' : ''}`
        }
          onClick={() => setIsTaskDone(true)}>
        <p>Done</p>
      </div>
      <div 
        className={
          `border 
          border-neutral-300 
          rounded-full
          px-4
          py-0.5
          hover:bg-emerald-400
          hover:border-emerald-400 cursor-pointer transition duration-300
          ${isTaskDone === false ? 'bg-emerald-400' : ''}`
        } 
          onClick={() => setIsTaskDone(false)}>
        <p>Pending</p>
      </div>
    </div>
  )
}
