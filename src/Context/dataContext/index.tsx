import { PropsWithChildren, createContext, useContext, useMemo } from 'react'
import { useFetch } from '../../Hooks'
import { Props, Sales } from './DataContext.types'

const DataContext = createContext<Props | null>(null)

export const useData = () => {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }

  return context
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const { data, error, loading } = useFetch<Sales[]>(
    import.meta.env.VITE_BASE_URL,
  )

  const contextValue = useMemo(
    () => ({ data, error, loading }),
    [data, error, loading],
  )

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  )
}
