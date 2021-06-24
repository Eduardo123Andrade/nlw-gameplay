import React, { ReactNode } from 'react'
import { View, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { theme } from '../../global/theme'
import Feather from 'react-native-vector-icons/Feather'
import { Styles } from './styles'
import { useNavigation } from '@react-navigation/core'


type Props = {
    title: string
    action?: ReactNode
}

export const Header = ({ title, action }: Props) => {
    const { secondary100, secondary40, heading } = theme.colors
    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }
    return (
        <LinearGradient
            style={Styles.container}
            colors={[secondary100, secondary40]}>

            <BorderlessButton onPress={handleGoBack}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={heading}
                />
            </BorderlessButton>

            <Text style={Styles.title}>
                {title}
            </Text>

            { action ?
                <View>
                    {action}
                </View> :
                <View style={{ width: 24 }} />
            }

        </LinearGradient>
    )
}