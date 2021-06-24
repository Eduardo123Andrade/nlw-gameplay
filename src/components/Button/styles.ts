import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const { colors, fonts } = theme

export const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 56,
        backgroundColor: colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        color: colors.heading,
        fontFamily: fonts.text500,
        fontSize: 15,
        textAlign: "center"
    }
})