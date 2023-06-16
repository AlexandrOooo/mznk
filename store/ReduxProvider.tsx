'use client'
import { store } from './index'
import { Provider } from 'react-redux'
import React from 'react'

export const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return <Provider store={store}>{children}</Provider>
}
