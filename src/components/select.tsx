import { Box, Text } from 'ink'
import { Select as SelectInput } from '@inkjs/ui'

interface ISelectOptions<T> {
  message: string
  options: IOption<T>[]
  onSelect: (option: IOption<T>) => void
}

export interface IOption<T> {
  label: string
  value: T
}

export function Select<T>(props: ISelectOptions<T>) {
  const { message, options, onSelect } = props

  return (
    <Box>
      <Text>{message}: </Text>
      <SelectInput
        options={options.map((option, i) => ({
          label: option.label
        , value: i.toString()
        }))}
        onChange={indexString => {
          const index = Number(indexString)
          const option = options[index]

          onSelect(option)
        }}
      />
    </Box>
  )
}
