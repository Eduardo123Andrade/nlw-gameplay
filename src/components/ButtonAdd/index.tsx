import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from '../../global/theme'
import { Styles } from './styles'

export const ButtonAdd = ({ ...rest }: RectButtonProps) => {
    return (
        <RectButton
            style={Styles.container}
            {...rest}
        >
            <MaterialCommunityIcons
                name="plus"
                color={theme.colors.heading}
                size={24}
            />
        </RectButton>
    )
}