import { render } from 'ink'
import { Select } from '@components/select.js'
import { IOption } from './types.js'

export function select<T>(message: string, options: IOption<T>[]): Promise<T> {
  return new Promise(resolve => {
    const { unmount } = render(
      <Select
        message={message}
        options={options}
        onSelect={option => {
          unmount()
          resolve(option.value)
        }}
      />
    )
  })
}
