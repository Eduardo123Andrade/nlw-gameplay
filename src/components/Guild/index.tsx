import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { GuildIcon } from '../GuildIcon'
import { Styles } from './styles'

import Feather from 'react-native-vector-icons/Feather'
import { theme } from '../../global/theme'

const { colors } = theme

export type GuildProps = {
    id: string
    name: string
    icon: string | null
    owner: boolean
}

type Props = TouchableOpacityProps & {
    data: GuildProps
}

export const Guild = ({ data, ...rest }: Props) => {
    const { name, owner } = data
    return (
        <TouchableOpacity
            style={Styles.container}
            activeOpacity={0.7}
            {...rest}>

            <GuildIcon />

            <View style={Styles.content}>
                <View>
                    <Text style={Styles.title}>
                        {name}
                    </Text>

                    <Text style={Styles.type}>
                        {owner ? 'Administrador' : 'Convidado'}
                    </Text>

                </View>
            </View>

            <Feather
                name="chevron-right"
                size={24}
                color={colors.heading}
            />

        </TouchableOpacity>
    )
}