import React, { ReactNode } from 'react'
import { View, Modal, ModalProps } from 'react-native'
import { Background } from '../Background'
import { Styles } from './styles'

type Props = ModalProps & {
    children: ReactNode
}


export const ModalView = ({ children, ...rest }: Props) => {
    return (
        <Modal
            transparent
            animationType="slide"
            {...rest}
        >
            <View style={Styles.overlay}>
                <View style={Styles.container}>
                    <Background>
                        <View style={Styles.bar} />
                        {children}
                    </Background>
                </View>

            </View>

        </Modal>
    )
}