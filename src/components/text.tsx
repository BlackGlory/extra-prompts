import { Box, Text as InkText } from 'ink'
import { TextInput } from '@inkjs/ui'

interface ITextProps {
  message: string
  onSubmit(value: string): void
}

export function Text(props: ITextProps) {
  const { message, onSubmit } = props

  return (
    <Box>
      <InkText>{message}: </InkText>
      <TextInput onSubmit={onSubmit} />
    </Box>
  )
}
