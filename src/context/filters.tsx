import { createContext, useState } from 'react'
import { FiltersContextType } from '../types'

export const FilterContext = createContext<FiltersContextType | null>(null)

export function FilterProvider ({ children }: {children: React.ReactNode}) {
  const [isTaskDone, setIsTaskDone] = useState(undefined)

  return (
    <FilterContext.Provider value={{
      isTaskDone,
      setIsTaskDone
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}