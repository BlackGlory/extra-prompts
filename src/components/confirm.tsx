import { Box, Text } from 'ink'
import { TextInput } from '@inkjs/ui'

interface IConfirmProps {
  message: string
  defaultValue: boolean

  onSubmit(value: boolean): void
}

export function Confirm(props: IConfirmProps) {
  const { message, defaultValue, onSubmit } = props

  return (
    <Box>
      <Text>{message}{defaultValue ? '(Y/n)' : '(y/N)'}: </Text>
      <TextInput
        onSubmit={value => {
          const lowerCaseValue = value.toLowerCase()
          if (lowerCaseValue.startsWith('y')) {
            onSubmit(true)
          } else if (lowerCaseValue.startsWith('n')) {
            onSubmit(false)
          } else {
            onSubmit(defaultValue)
          }
        }} 
      />
    </Box>
  )
}
