import { StyleSheet } from "react-native"
import { theme } from "../../global/theme"

const { colors } = theme

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100
    },
    overlay: {
        flex: 1,
        backgroundColor: colors.overlay
    },
    bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: colors.secondary30,
        alignSelf: 'center',
        marginTop: 13,
    }
})