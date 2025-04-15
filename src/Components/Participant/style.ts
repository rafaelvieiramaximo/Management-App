import { StyleSheet } from "react-native";
import { FlipInEasyY } from "react-native-reanimated";

export const styles = StyleSheet.create({

    container:{
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
    },

    name:{
        color: '#FFF',
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
    },

    button:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44', 
    }, 

    text_button:{
        color: '#fff',
        fontSize: 16,
    }
})