import { StyleSheet } from "react-native"
import { theme } from "../../global/theme"

const { colors } = theme

export const Styles = StyleSheet.create({
    container: {
        height: 48,
        width: 48,
        backgroundColor: colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
})