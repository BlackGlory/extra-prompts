import React from 'react'
import { Password } from '@components/password'
import { render } from 'ink'

export function password(message: string): Promise<string> {
  return new Promise(resolve => {
    const { unmount } = render(
      <Password
        message={message}
        onSubmit={value => {
          unmount()
          resolve(value)
        }}
      />
    )
  })
}
