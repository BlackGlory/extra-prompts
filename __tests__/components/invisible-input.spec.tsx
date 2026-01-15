import { describe, test, vi, expect } from 'vitest'
import { InvisibleInput } from '@components/invisible-input.js'
import { render } from 'ink-testing-library'
import { delay } from 'extra-promise'

describe('InvisibleInput', () => {
  test('render', async () => {
    const fn = vi.fn()
    const { lastFrame } = render(
      <InvisibleInput onSubmit={fn} />
    )

    expect(lastFrame()).toBe('')
    expect(fn).toBeCalledTimes(0)
  })

  test('onSubmit', async () => {
    const fn = vi.fn()
    const { stdin, lastFrame } = render(
      <InvisibleInput onSubmit={fn} />
    )

    await delay(100)
    stdin.write('hello')
    await delay(100)
    stdin.write('\r')
    await delay(100)

    expect(lastFrame()).toBe('')
    expect(fn).toBeCalledTimes(1)
    expect(fn).toBeCalledWith('hello')
  })
})
