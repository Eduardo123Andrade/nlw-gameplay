import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { Styles } from './styles'


export const TextArea = ({ ...rest }: TextInputProps) => {
    return (
        <TextInput
            style={Styles.container}
            {...rest}
        />

    )
}