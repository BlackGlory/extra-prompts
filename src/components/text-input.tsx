import React, { useState } from 'react'
import { Text, useInput } from 'ink'

interface ITextInputProps {
  onSubmit(value: string): void
}

export function TextInput(props: ITextInputProps) {
  const { onSubmit } = props
  const [value, setValue] = useState('')

  useInput((input, key) => {
    if (key.return) {
      onSubmit(value)
    } else if (key.backspace || key.delete) {
      // https://github.com/vadimdemedes/ink/issues/512

      setValue(value.slice(0, value.length - 1))
    } else {
      setValue(value + input)
    }
  })

  return (
    <Text>{value}</Text>
  )
}
