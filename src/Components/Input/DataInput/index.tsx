import { Props } from './DateInput.types'

export const DataInput = ({ label, ...props }: Props) => {
  return (
    <div>
      <label htmlFor="init">{label}</label>
      <input type="date" id="init" {...props} />
    </div>
  )
}
