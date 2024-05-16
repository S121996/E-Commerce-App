import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pressableStyles } from '../styles/styles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const Payment = () => {
    const {cart} = useSelector((state)=>state.cart)
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const total = cart.reduce((totalPrice,item)=>
      totalPrice + item.price * item.quantity,
      0
    )
    const handlePayment = () => {
        navigation.navigate('Success')
    }
  return (
    <View style={{marginTop:20,padding:15,}}>
        <View style={{height:'100%',justifyContent:'space-between'}}>
      <Text style={{fontSize:17,fontWeight:'500'}}>Payment</Text>
       <View>
        <Text style={{fontSize:18,fontWeight:'bold',marginLeft:15}}>Total Price: {total}</Text>
        <Pressable
        onPress={handlePayment}
        style={pressableStyles.pressable}>
            <Text style={pressableStyles.pressableText}>Pay Now</Text>
        </Pressable>
       </View>
      </View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({})