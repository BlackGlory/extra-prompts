import { describe, test, vi, expect } from 'vitest'
import { StandardInput } from '@components/standard-input.js'
import { render } from 'ink-testing-library'
import { delay } from 'extra-promise'

describe('StandardInput', () => {
  test('render', () => {
    const fn = vi.fn()
    const { lastFrame } = render(
      <StandardInput onInput={fn} />
    )

    expect(lastFrame()).toBe('')
    expect(fn).toBeCalledTimes(0)
  })

  describe('onInput', () => {
    test('text', async () => {
      const fn = vi.fn()
      const { stdin, lastFrame } = render(
        <StandardInput onInput={fn} />
      )

      await delay(100)
      stdin.write('foo')
      await delay(100)
      stdin.write('\r')
      await delay(100)

      expect(lastFrame()).toBe('')
      expect(fn).toBeCalledTimes(2)
      expect(fn).nthCalledWith(1, 'foo')
      expect(fn).nthCalledWith(2, '\r')
    })

    test('with modifier keys', async () => {
      const fn = vi.fn()
      const { stdin, lastFrame } = render(
        <StandardInput onInput={fn} />
      )

      await delay(100)
      stdin.write('\u0001')
      await delay(100)
      stdin.write('\r')
      await delay(100)

      expect(lastFrame()).toBe('')
      expect(fn).toBeCalledTimes(2)
      expect(fn).nthCalledWith(1, '\u0001')
      expect(fn).nthCalledWith(2, '\r')
    })
  })
})
