import { render } from 'ink'
import { Select, IOption } from '@components/select'

export { IOption } from '@components/select'

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
