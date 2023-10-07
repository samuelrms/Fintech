import { Typography } from '../..'
import { Props } from './DateInput.types'

export const DataInput = ({ label, ...props }: Props) => {
  return (
    <div>
      <Typography as="label" htmlFor={label}>
        {label}
      </Typography>
      <input type="date" id={label} {...props} />
    </div>
  )
}
