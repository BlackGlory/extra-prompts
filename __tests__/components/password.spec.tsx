import { describe, test, vi, expect } from 'vitest'
import { Password } from '@components/password.js'
import { render } from 'ink-testing-library'
import { delay } from 'extra-promise'

describe('Password', () => {
  test('render', () => {
    const fn = vi.fn()
    const { lastFrame } = render(
      <Password
        message='message'
        onSubmit={fn}
      />
    )

    expect(lastFrame()).toMatchSnapshot()
    expect(fn).toBeCalledTimes(0)
  })

  test('onSubmit', async () => {
    const fn = vi.fn()
    const { stdin, lastFrame } = render(
      <Password
        message='message'
        onSubmit={fn}
      />
    )

    await delay(100)
    stdin.write('hello')
    await delay(100)
    stdin.write('\r')
    await delay(100)

    expect(lastFrame()).toMatchSnapshot()
    expect(fn).toBeCalledTimes(1)
    expect(fn).toBeCalledWith('hello')
  })
})
