import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../styles/styles'
import { useNavigation } from '@react-navigation/native'

const Success = () => {
    const navigation = useNavigation();
    return (
        <View style={{ marginTop: 20, padding: 15, justifyContent: 'space-around', alignItems: 'center', flex: 1 }}>
            <View style={{ alignItems: 'center' }}>
                <AntDesign
                    name='checkcircleo'
                    size={40}
                    color={colors.theme_color}
                />
                <Text style={{fontSize:18,fontWeight:'500'}}>Thank you for your order!</Text>
                <Text style={{fontSize:18,fontWeight:'400'}}>check you email box for reciept</Text>
                <Pressable
                style={{borderWidth:0.5,borderColor:'skyblue'}}
                onPress={()=>navigation.navigate('Home')}>
                    <Text style={{fontSize:16,fontWeight:'500'}}>continue shopping</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Success

const styles = StyleSheet.create({})