import React from 'react'
import { Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { theme } from '../../global/theme'
import { Styles } from './styles'

const { secondary50, secondary70 } = theme.colors


type Props = {
    urlImage: string
}

export const Avatar = ({ urlImage }: Props) => {
    return (
        <LinearGradient
            style={Styles.container}
            colors={[secondary50, secondary70]}
        >
            <Image
                source={{ uri: urlImage }}
                style={Styles.avatar}
            />

        </LinearGradient>
    )
}