import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const { colors, fonts } = theme

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    image: {
        width: '100%',
        height: 360,
    },
    title: {
        color: colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: fonts.title700,
        lineHeight: 40,
    },
    subtitle: {
        color: colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
        fontFamily: fonts.title500,
        lineHeight: 25,
    }
})