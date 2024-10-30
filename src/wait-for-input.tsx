import { WaitForInput } from '@components/wait-for-input.js'
import { render } from 'ink'

export function waitForInput(
  message: string
, predicate?: (key: string) => boolean
): Promise<string> {
  return new Promise(resolve => {
    const { unmount } = render(
      <WaitForInput
        message={message}
        predicate={predicate}
        callback={key => {
          unmount()
          resolve(key)
        }}
      />
    )
  })
}
