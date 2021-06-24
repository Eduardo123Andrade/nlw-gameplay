import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { theme } from '../global/theme'
import { AppointmentCreate } from '../screens/AppointmentCreate'
import { AppointmentDetails } from '../screens/AppointmentDetails'
import { Home } from '../screens/Home'
import { SignIn } from '../screens/signin'

const { Navigator, Screen } = createStackNavigator()

export const AuthRouter = () => {
    return (
        <Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}>
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
            <Screen
                name="AppointmentCreate"
                component={AppointmentCreate}
            />
        </Navigator>
    )
}