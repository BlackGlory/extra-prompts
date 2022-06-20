import React from 'react'
import { StandardInput } from '@components/standard-input'
import { Box, Text } from 'ink'

interface IWaitInputProps {
  message: string
  callback: (key: string) => void
  predicate?: (key: string) => boolean
}

export function WaitForInput(props: IWaitInputProps) {
  const { message, predicate, callback } = props

  return (
    <Box>
      <Text>{message}</Text>
      <StandardInput onInput={key => {
        if (predicate) {
          if (predicate(key)) {
            callback(key)
          }
        } else {
          callback(key)
        }
      }} />
    </Box>
  )
}
