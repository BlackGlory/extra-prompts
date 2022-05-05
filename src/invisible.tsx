import React from 'react'
import { Invisible } from '@components/invisible'
import { render } from 'ink'

export function invisible(message: string): Promise<string> {
  return new Promise(resolve => {
    const { unmount } = render(
      <Invisible
        message={message}
        onSubmit={value => {
          unmount()
          resolve(value)
        }}
      />
    )
  })
}
