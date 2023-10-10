import { MonthBtn, Stack } from '..'

export const Months = () => {
  return (
    <Stack outline bgColor="transparent" flex pt={0} pb={0}>
      <MonthBtn n={-3} />
      <MonthBtn n={-2} />
      <MonthBtn n={-1} />
      <MonthBtn n={0} />
    </Stack>
  )
}
