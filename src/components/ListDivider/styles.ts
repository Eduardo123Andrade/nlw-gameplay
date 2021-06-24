import { StyleSheet } from "react-native"
import { theme } from "../../global/theme"

export const Styles = StyleSheet.create({
    container: {
        width: '75%',
        height: 1,
        marginTop: 2, 
        backgroundColor: theme.colors.secondary40,
        marginVertical: 31,
        alignSelf: 'flex-end'
    }
})