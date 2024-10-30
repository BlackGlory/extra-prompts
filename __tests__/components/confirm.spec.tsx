import { Confirm } from '@components/confirm.js'
import { render } from 'ink-testing-library'
import { delay } from 'extra-promise'

describe('Confirm', () => {
  describe('render', () => {
    test('defaultValue = true', () => {
      const fn = vi.fn()
      const { lastFrame } = render(
        <Confirm
          message='message'
          defaultValue={true}
          onSubmit={fn}
        />
      )

      expect(lastFrame()).toBe('message(Y/n):')
      expect(fn).toBeCalledTimes(0)
    })

    test('defaultValue = false', () => {
      const fn = vi.fn()
      const { lastFrame } = render(
        <Confirm
          message='message'
          defaultValue={false}
          onSubmit={fn}
        />
      )

      expect(lastFrame()).toBe('message(y/N):')
      expect(fn).toBeCalledTimes(0)
    })
  })

  describe('defaultValue', () => {
    test('defaultValue = true', async () => {
      const fn = vi.fn()
      const { stdin, lastFrame } = render(
        <Confirm
          message='message'
          defaultValue={true}
          onSubmit={fn}
        />
      )

      await delay(100)
      stdin.write('\r')
      await delay(100)

      expect(lastFrame()).toBe('message(Y/n):')
      expect(fn).toBeCalledTimes(1)
      expect(fn).toBeCalledWith(true)
    })

    test('defaultValue = false', async () => {
      const fn = vi.fn()
      const { stdin, lastFrame } = render(
        <Confirm
          message='message'
          defaultValue={false}
          onSubmit={fn}
        />
      )

      await delay(100)
      stdin.write('\r')
      await delay(100)

      expect(lastFrame()).toBe('message(y/N):')
      expect(fn).toBeCalledTimes(1)
      expect(fn).toBeCalledWith(false)
    })
  })

  describe('onSubmit', () => {
    test('yes', async () => {
      const fn = vi.fn()
      const { stdin, lastFrame } = render(
        <Confirm
          message='message'
          defaultValue={true}
          onSubmit={fn}
        />
      )

      await delay(100)
      stdin.write('yes')
      await delay(100)
      stdin.write('\r')
      await delay(100)

      expect(lastFrame()).toBe('message(Y/n): yes')
      expect(fn).toBeCalledTimes(1)
      expect(fn).toBeCalledWith(true)
    })

    test('no', async () => {
      const fn = vi.fn()
      const { stdin, lastFrame } = render(
        <Confirm
          message='message'
          defaultValue={true}
          onSubmit={fn}
        />
      )

      await delay(100)
      stdin.write('no')
      await delay(100)
      stdin.write('\r')
      await delay(100)

      expect(lastFrame()).toBe('message(Y/n): no')
      expect(fn).toBeCalledTimes(1)
      expect(fn).toBeCalledWith(false)
    })
  })
})
