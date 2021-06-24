import React, { ReactNode } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { theme } from '../../global/theme'
import { Styles } from './styles'

const { colors } = theme

type Props = {
    children: ReactNode
}


export const Background = ({ children }: Props) => {
    return (
        <LinearGradient
            style={Styles.container}
            colors={[colors.secondary80, colors.secondary100]}
        >
            {children}
        </LinearGradient>
    )
}