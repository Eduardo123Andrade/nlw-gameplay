import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { Styles } from './styles'


export const SmallInput = ({ ...rest }: TextInputProps) => {
    return (
        <TextInput
            style={Styles.container}
            keyboardType='numeric'
            {...rest}
        />

    )
}