import { PasswordInput } from '@components/password-input'
import { render } from 'ink-testing-library'
import { delay } from 'extra-promise'

describe('PasswordInput', () => {
  test('render', () => {
    const fn = jest.fn()
    const { lastFrame } = render(
      <PasswordInput onSubmit={fn} />
    )

    expect(lastFrame()).toBe('')
    expect(fn).toBeCalledTimes(0)
  })

  test('onSubmit', async () => {
    const fn = jest.fn()
    const { stdin, lastFrame } = render(
      <PasswordInput onSubmit={fn} />
    )

    await delay(100)
    stdin.write('hello')
    await delay(100)
    stdin.write('\r')
    await delay(100)

    expect(lastFrame()).toBe('*****')
    expect(fn).toBeCalledTimes(1)
    expect(fn).toBeCalledWith('hello')
  })
})
