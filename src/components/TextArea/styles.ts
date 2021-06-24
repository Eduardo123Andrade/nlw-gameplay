import { StyleSheet } from "react-native"
import { theme } from "../../global/theme"

const { colors, fonts } = theme

export const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 95,
        backgroundColor: colors.secondary40,
        color: colors.heading,
        borderRadius: 8,
        fontFamily: fonts.text400,
        fontSize: 13,
        marginRight: 4,
        borderWidth: 1,
        borderColor: colors.secondary50,
        paddingHorizontal: 16,
        paddingTop: 16,
        textAlignVertical: 'top'
    }
})