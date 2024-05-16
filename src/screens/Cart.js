import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AirbnbRating } from 'react-native-ratings'
import { clearCart, removeItem } from '../redux/reducer/CartReducer'
import { useNavigation } from '@react-navigation/native'

const Cart = () => {
    const {cart} = useSelector((state)=>state.cart)
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const total = cart.reduce((totalPrice,item)=>
      totalPrice + item.price * item.quantity,
      0
    )
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Items:</Text>
      <Text style={{fontSize:18,fontWeight:'500'}}>Cart Total: {total}</Text>
      <Pressable style={{
        padding:10,
        borderRadius:5,
        backgroundColor:'#FFC72C',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
      }}>
        <Text style={{fontSize:16}}
        onPress={()=>navigation.navigate('Address')}
        >Proceed to Buy</Text>
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
      {cart.map((item)=>(
        <View key={item.id} style={styles.cartItem}>
            <View>
          <View style={styles.imageContainer}>
            <Image
              source={{uri:item.images[0]}}
              style={styles.image}
            />
          </View>
          
         
          <View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
             <TouchableOpacity><Text style={styles.quantityButton}>-</Text></TouchableOpacity>
               <Text style={styles.quantity}>{item.quantity}</Text>
               <TouchableOpacity><Text style={styles.quantityButton}>+</Text></TouchableOpacity>
               <TouchableOpacity
               onPress={()=>dispatch(removeItem(item))}
               ><Text style={{fontSize:18,fontWeight:'bold',color:'red'}}>X</Text></TouchableOpacity>
            </View>
          </View> 
          </View>

          <View style={styles.itemDetails}>
             <Text style={{fontSize:18,fontWeight:'500'}}>{item.title}</Text>
             <Text style={{fontSize:16,marginVertical:5}}>price: {item.price}</Text>
             {/* <Text></Text> */}
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <AirbnbRating
                        count={5}
                        showRating={false}
                        size={18}
                        defaultRating={item.rating}
                        isDisabled={true}
                        starContainerStyle={{ marginLeft: 10 }}
                    />
                    <View></View>
              </View>
           </View> 
        </View>    
      ))}
      
      {cart.length > 0 && (
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View></View>
      <Pressable
      onPress={()=>dispatch(clearCart())}
      style={{borderWidth:1,borderColor:'skyblue',padding:4}}>
        <Text style={{fontSize:16,fontWeight:'500'}}>Clear cart</Text>
      </Pressable>
      </View>
      )}
      </ScrollView>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#fff'
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:15
    },
    cartItem:{
        flexDirection:'row',
        marginBottom:20,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:6,
    },
    imageContainer:{
     width:120,
     height:120,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:'white',
     padding:8
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
    quantityButton:{
        fontSize:20,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:5,
        marginBottom:3
    },
    quantity:{
        fontSize:18,
        marginHorizontal:'10'
    },
    itemDetails:{
        flex:1,
        padding:10,
        flexDirection:'column',
        // alignItems:'center'
        // justifyContent:'space-around'
    },


})