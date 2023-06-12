import { useStandardInput } from '@hooks/use-standard-input'

interface IStandardInputProps {
  onInput: (key: string) => void
}

// 创建此组件是为了测试.
export function StandardInput(props: IStandardInputProps) {
  const { onInput } = props

  useStandardInput(onInput)

  return (
    <></>
  )
}
