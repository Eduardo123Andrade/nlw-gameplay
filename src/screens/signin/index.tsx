import { useNavigation } from '@react-navigation/core'
import React, { useContext } from 'react'
import { Image, Text, View } from 'react-native'
import IllustrationImg from '../../assets/illustration.png'
import { Background } from '../../components/Background'
import { ButtonIcon } from '../../components/ButtonIcon'
import { useAuth } from '../../hooks/useAuth'
import { Styles } from './styles'

export const SignIn = () => {
    const navigation = useNavigation()

    const { user } = useAuth()

    const handleSingIn = () => {
        navigation.navigate('Home')
    }

    return (
        <Background>
            <View style={Styles.container}>
                <Image
                    source={IllustrationImg}
                    style={Styles.image}
                    resizeMode='stretch'
                />

                <View style={Styles.content}>
                    <Text style={Styles.title}>
                        Conecte-se {`\n`}
                    e organize suas {`\n`}
                    jogatinas {`\n`}
                    </Text>

                    <Text style={Styles.subtitle}>
                        Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                    <ButtonIcon
                        title="Entrar com Discord"
                        onPress={handleSingIn}
                    />
                </View>
            </View>
        </Background>
    )
}