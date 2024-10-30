import { Box, Text as InkText } from 'ink'
import { PasswordInput } from '@components/password-input.js'

interface IPasswordProps {
  message: string
  onSubmit(value: string): void
}

export function Password(props: IPasswordProps) {
  const { message, onSubmit } = props

  return (
    <Box>
      <InkText>{message}: </InkText>
      <PasswordInput onSubmit={onSubmit} />
    </Box>
  )
}
