import { TextInput } from '@components/text-input'
import { render } from 'ink-testing-library'
import { delay } from 'extra-promise'

describe('TextInput', () => {
  test('render', () => {
    const fn = jest.fn()
    const { lastFrame } = render(
      <TextInput onSubmit={fn} />
    )

    expect(lastFrame()).toBe('')
    expect(fn).toBeCalledTimes(0)
  })

  test('onSubmit', async () => {
    const fn = jest.fn()
    const { stdin, lastFrame } = render(
      <TextInput onSubmit={fn} />
    )

    await delay(100)
    stdin.write('hello')
    await delay(100)
    stdin.write('\r')
    await delay(100)

    expect(lastFrame()).toBe('hello')
    expect(fn).toBeCalledTimes(1)
    expect(fn).toBeCalledWith('hello')
  })
})
