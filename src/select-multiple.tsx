import { render } from 'ink'
import { MultiSelect } from '@components/multi-select.js'
import { IOption } from './types.js'

export function selectMultiple<T>(
  message: string
, options: IOption<T>[]
): Promise<T[]> {
  return new Promise(resolve => {
    const { unmount } = render(
      <MultiSelect
        message={message}
        options={options}
        onSelect={options => {
          unmount()
          resolve(options.map(option => option.value))
        }}
      />
    )
  })
}
