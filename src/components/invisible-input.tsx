import { Transform } from 'ink'
import { TextInput } from '@components/text-input'

interface IInvisibleInput {
  onSubmit(value: string): void
}

export function InvisibleInput(props: IInvisibleInput) {
  const { onSubmit } = props

  return (
    <Transform transform={output => ' '.repeat(output.length)}>
      <TextInput onSubmit={onSubmit} />
    </Transform>
  )
}
