import React from 'react'
import { Confirm } from '@components/confirm'
import { render } from 'ink'

export function confirm(message: string, defaultValue: boolean): Promise<boolean> {
  return new Promise(resolve => {
    const { unmount } = render(
      <Confirm
        defaultValue={defaultValue}
        message={message}
        onSubmit={value => {
          unmount()
          resolve(value)
        }}
      />
    )
  })
}
