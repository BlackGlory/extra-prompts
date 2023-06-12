import { useStdin } from 'ink'
import { useMount } from 'extra-react-hooks'
import { assert } from '@blackglory/prelude'
import { Destructor } from 'extra-defer'

/**
 * https://en.wikipedia.org/wiki/List_of_Unicode_characters
 */
export function useStandardInput(onInput: (key: string) => void) {
  // `ink.useInput`会将输入的按键解释为字符和修饰符的组合,
  // 例如`Ctrl+A`会变成`\u0061`和`key.ctrl = true`,
  // 而该组件希望能够原样返回stdin的输入字符,
  // 即获得`\u0001`.
  const { stdin, isRawModeSupported, setRawMode } = useStdin()

  useMount(() => {
    assert(stdin, 'stdin is required')
    const destructor = new Destructor()

    if (isRawModeSupported && !stdin?.isRaw) {
      // 防止回显输入的字符(相关输入应该被吞掉而不是在屏幕上显示)
      setRawMode(true)
      destructor.defer(() => setRawMode(false))
    }

    stdin.addListener('data', dataListener)
    destructor.defer(() => stdin.removeListener('data', dataListener))

    return () => {
      destructor.execute()
    }

    function dataListener(buffer: Buffer): void {
      onInput(buffer.toString())
    }
  })
}
