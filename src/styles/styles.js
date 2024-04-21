import { Platform, StatusBar, StyleSheet } from "react-native";

export const colors = {
     bg_color: 'white',
     theme_color: 'rgba(0,122,255,0.5)',
     primary_text: 'grey',
}

export const defaultStyle = StyleSheet.create({
    flex:1, 
    paddingTop: Platform.OS === 'android' ? 0 : '0',
    backgroundColor: colors.bg_color
})

export const title = StyleSheet.create({
    fontSize:22,
    fontWeight:'bold',
    marginBottom: 20,
    colors: colors.theme_color,
    textAlign:'center'
})

export const inputStyling = StyleSheet.create({
    height:50,
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.theme_color,
    paddingLeft: 12,
    borderRadius: 5,
    color:'black'
})

export const pressableStyles = StyleSheet.create({
    pressable:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal:20,
        backgroundColor: colors.theme_color,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 20
    },
    pressableText:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    }
})