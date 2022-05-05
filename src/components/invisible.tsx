import React from 'react'
import { Box, Text as InkText } from 'ink'
import { InvisibleInput } from '@components/invisible-input'

interface IInvisibleProps {
  message: string
  onSubmit(value: string): void
}

export function Invisible(props: IInvisibleProps) {
  const { message, onSubmit } = props

  return (
    <Box>
      <InkText>{message}: </InkText>
      <InvisibleInput onSubmit={onSubmit} />
    </Box>
  )
}
