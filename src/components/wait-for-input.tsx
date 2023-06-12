import { useStandardInput } from '@hooks/use-standard-input'
import { Text } from 'ink'

interface IWaitInputProps {
  message: string
  callback: (key: string) => void
  predicate?: (key: string) => boolean
}

export function WaitForInput(props: IWaitInputProps) {
  const { message, predicate, callback } = props

  useStandardInput(key => {
    if (predicate) {
      if (predicate(key)) {
        callback(key)
      }
    } else {
      callback(key)
    }
  })

  return (
    <Text>{message}</Text>
  )
}
