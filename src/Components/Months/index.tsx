import { MonthBtn, Stack } from '..'

export const Months = () => {
  return (
    <Stack flex>
      <MonthBtn n={-3} />
      <MonthBtn n={-2} />
      <MonthBtn n={-1} />
      <MonthBtn n={0} />
    </Stack>
  )
}
