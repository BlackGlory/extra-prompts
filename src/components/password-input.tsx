import { Transform } from 'ink'
import { TextInput } from '@components/text-input.js'

interface IPasswordInput {
  onSubmit(value: string): void
}

export function PasswordInput(props: IPasswordInput) {
  const { onSubmit } = props

  return (
    <Transform transform={output => '*'.repeat(output.length)}>
      <TextInput onSubmit={onSubmit} />
    </Transform>
  )
}
