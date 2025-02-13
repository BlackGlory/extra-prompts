import { Text } from '@components/text.js'
import { render } from 'ink-testing-library'
import { delay } from 'extra-promise'

describe('Text', () => {
  test('render', () => {
    const fn = vi.fn()
    const { lastFrame } = render(
      <Text
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
      <Text
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
