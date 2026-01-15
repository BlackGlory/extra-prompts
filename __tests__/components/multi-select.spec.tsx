import { describe, test, vi, expect } from 'vitest'
import { MultiSelect } from '@components/multi-select.js'
import { render } from 'ink-testing-library'
import { delay } from 'extra-promise'
import { stripVTControlCharacters } from 'util'

expect.addSnapshotSerializer({
  serialize: stripVTControlCharacters
, test: () => true
})

describe('MultiSelect', () => {
  test('render', () => {
    const fn = vi.fn()
    const { lastFrame } = render(
      <MultiSelect
        message='message'
        onSelect={fn}
        options={[
          { label: 'Option 1', value: 1 }
        , { label: 'Option 2', value: 2 }
        , { label: 'Option 3', value: 3 }
        ]}
      />
    )

    expect(lastFrame()).toMatchSnapshot()
    expect(fn).toBeCalledTimes(0)
  })

  test('onSelect', async () => {
    const fn = vi.fn()
    const { lastFrame, stdin } = render(
      <MultiSelect
        message='message'
        onSelect={fn}
        options={[
          { label: 'Option 1', value: 1 }
        , { label: 'Option 2', value: 2 }
        , { label: 'Option 3', value: 3 }
        ]}
      />
    )

    await delay(100)
    stdin.write('\u001b[B') // down
    await delay(100)
    stdin.write(' ')
    await delay(100)
    stdin.write('\u001b[B') // down
    await delay(100)
    stdin.write(' ')
    await delay(100)
    stdin.write('\r')
    await delay(100)

    expect(lastFrame()).toMatchSnapshot()
    expect(fn).toBeCalledTimes(1)
    expect(fn).toBeCalledWith([
      {
        label: 'Option 2'
      , value: 2
      }
    , {
        label: 'Option 3'
      , value: 3
      }
    ])
  })
})
