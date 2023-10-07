import { Typography } from '../..'
import { Input } from './DateInput.styles'
import { Props } from './DateInput.types'

export const DataInput = ({ label, ...props }: Props) => {
  return (
    <div>
      <Typography as="label" htmlFor={label}>
        {label}
      </Typography>
      <Input type="date" id={label} {...props} />
    </div>
  )
}
