import React from 'react'
import { StatusBar } from 'react-native'
import { Background } from './src/components/Background'
import { Routes } from './src/routers'

export const App = () => {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  )
}