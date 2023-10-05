import { useState } from 'react'
import { DataInput } from '../Input'
import { Form } from './DataRange.styles'

export const DataRange = () => {
  const [initRange, setInitRange] = useState('')
  const [finallyRange, setFinallyRange] = useState('')
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <DataInput
        label="Inicio"
        value={initRange}
        onChange={({ target }) => setInitRange(target.value)}
      />
      <DataInput
        label="Final"
        value={finallyRange}
        onChange={({ target }) => setFinallyRange(target.value)}
      />
    </Form>
  )
}
