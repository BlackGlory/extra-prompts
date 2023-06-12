import { Text } from '@components/text'
import { render } from 'ink'

export function text(message: string): Promise<string> {
  return new Promise(resolve => {
    const { unmount } = render(
      <Text
        message={message}
        onSubmit={value => {
          unmount()
          resolve(value)
        }}
      />
    )
  })
}
