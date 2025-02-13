import { Box, Text } from 'ink'
import { MultiSelect as MultiSelectInput } from '@inkjs/ui'
import { IOption } from '@src/types.js'

interface IMultipleSelectOptions<T> {
  message: string
  options: IOption<T>[]

  onSelect: (options: Array<IOption<T>>) => void
}

export function MultiSelect<T>(props: IMultipleSelectOptions<T>) {
  const { message, options, onSelect } = props

  return (
    <Box>
      <Text>{message}: </Text>
      <MultiSelectInput
        options={options.map((option, i) => ({
          label: option.label
        , value: i.toString()
        }))}
        onSubmit={indexStrings => {
          const indexes = indexStrings.map(indexString => Number(indexString))
          const option = indexes.map(index => options[index])

          onSelect(option)
        }}
      />
    </Box>
  )
}
