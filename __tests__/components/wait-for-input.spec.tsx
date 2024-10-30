import { WaitForInput } from '@components/wait-for-input.js'
import { render } from 'ink-testing-library'
import { delay } from 'extra-promise'

describe('waitForInput', () => {
  test('render', () => {
    const fn = vi.fn()
    const { lastFrame } = render(
      <WaitForInput
        message='message'
        callback={fn}
      />
    )

    expect(lastFrame()).toBe('message')
    expect(fn).toBeCalledTimes(0)
  })

  describe('callback', () => {
    test('text', async () => {
      const fn = vi.fn()
      const { stdin, lastFrame } = render(
        <WaitForInput
          message='message'
          callback={fn}
        />
      )

      await delay(100)
      stdin.write('foo')
      await delay(100)
      stdin.write('\r')
      await delay(100)

      expect(lastFrame()).toBe('message')
      expect(fn).toBeCalledTimes(2)
      expect(fn).nthCalledWith(1, 'foo')
      expect(fn).nthCalledWith(2, '\r')
    })

    test('with modifier keys', async () => {
      const fn = vi.fn()
      const { stdin, lastFrame } = render(
        <WaitForInput
          message='message'
          callback={fn}
        />
      )

      await delay(100)
      stdin.write('\u0001')
      await delay(100)
      stdin.write('\r')
      await delay(100)

      expect(lastFrame()).toBe('message')
      expect(fn).toBeCalledTimes(2)
      expect(fn).nthCalledWith(1, '\u0001')
      expect(fn).nthCalledWith(2, '\r')
    })

    test('with predicate', async () => {
      const fn = vi.fn()
      const { stdin, lastFrame } = render(
        <WaitForInput
          message='message'
          predicate={key => key === '\r'}
          callback={fn}
        />
      )

      await delay(100)
      stdin.write('foo')
      await delay(100)
      stdin.write('\r')
      await delay(100)

      expect(lastFrame()).toBe('message')
      expect(fn).toBeCalledTimes(1)
      expect(fn).nthCalledWith(1, '\r')
    })
  })
})
