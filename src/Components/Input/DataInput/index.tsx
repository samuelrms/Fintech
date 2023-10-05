import { Stack } from '../..'
import { Props } from './DateInput.types'

export const DataInput = ({ label, ...props }: Props) => {
  return (
    <Stack>
      <label htmlFor="init">{label}</label>
      <input type="date" id="init" {...props} />
    </Stack>
  )
}
