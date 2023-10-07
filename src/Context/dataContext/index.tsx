import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react'
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

const getDate = (ago: number) => {
  const date = new Date()
  date.setDate(date.getDate() - ago)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${year}-${month}-${day}`
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [initRange, setInitRange] = useState(getDate(30))
  const [finallyRange, setFinallyRange] = useState(getDate(0))

  const { data, error, loading } = useFetch<Sales[]>(
    `${import.meta.env.VITE_BASE_URL}${initRange}&final=${finallyRange}`,
  )

  console.log(data)

  const contextValue = useMemo(
    () => ({
      data,
      error,
      loading,
      initRange,
      setInitRange,
      finallyRange,
      setFinallyRange,
    }),
    [
      data,
      error,
      loading,
      initRange,
      setInitRange,
      finallyRange,
      setFinallyRange,
    ],
  )

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  )
}
