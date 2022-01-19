import React from 'react'
import { Provider } from 'react-redux'
import { ProviderStorageProps } from './types'
import store from './store'

export const ProviderStorage: React.FC<ProviderStorageProps> = ({
  children
}: ProviderStorageProps) => {
  return <Provider store={store}>{children}</Provider>
}
