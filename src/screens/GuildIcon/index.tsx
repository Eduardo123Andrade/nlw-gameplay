import React from 'react'
import { Image } from 'react-native'
import { Styles } from './styles'

export const GuildIcon = () => {
    const uri = 'https://i.pinimg.com/originals/9a/aa/a1/9aaaa12ce4ea3e56b059ff1197adbfda.png'
    return (
        <Image
            source={{ uri }}
            style={Styles.image}
            resizeMode="cover"
        />
    )
}