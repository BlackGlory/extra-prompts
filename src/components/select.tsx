import { Box, Text } from 'ink'
import SelectInput from 'ink-select-input'

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
        items={options.map(option => ({
          label: option.label
        , value: option.value
        }))}
        onSelect={item => {
          onSelect({
            label: item.label
          , value: item.value
          })
        }}
      />
    </Box>
  )
}
