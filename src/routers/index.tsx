import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { AuthRouter } from './auth.routes'

export const Routes = () => {
    return (
        <NavigationContainer>
            <AuthRouter />
        </NavigationContainer>
    )
}