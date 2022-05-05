import React from 'react'
import { render, Box, Text } from 'ink'
import SelectInput from 'ink-select-input'

export interface IOption<T> {
  label: string
  value: T
}

export function select<T>(message: string, options: IOption<T>[]): Promise<T> {
  return new Promise(resolve => {
    const { unmount } = render(
      <Box>
        <Text>{message}: </Text>
        <SelectInput
          items={options.map(option => ({
            label: option.label
          , value: option.value
          }))}
          onSelect={item => {
            unmount()
            resolve(item.value)
          }}
        />
      </Box>
    )
  })
}
