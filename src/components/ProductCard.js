import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AirbnbRating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';

const screenWidth= Dimensions.get('window').width
const ProductCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.card}
    onPress={()=>navigation.navigate('ProductDetails',{item:item})}
    >
     <Image
      source={{uri:item?.images[0]}}
      style={{width:150, height:150,resizeMode:'cover',borderRadius:8}}
     />
     <Text style={{fontWeight:600,color:'#333333',marginTop:5}}>{item.title.substring(0,10)}</Text>
     <View style={{flexDirection:'column',marginTop:5}}>
     <Text style={{fontSize:16,fontWeight:'500'}}>₹{item.price}</Text>
     <View style={{alignItems:'center',}}>
     <AirbnbRating
      count={5}
      showRating={false}
      size={15}
      defaultRating={item.rating.rate}
      isDisabled={true}
      starContainerStyle={{marginLeft:10}}
     />
     </View>
     </View>
    </Pressable>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    card:{
        marginLeft:4,
        marginVertical:10,
        backgroundColor:'#FFFFFF',
        padding:10,
        borderRadius:6,
        width:screenWidth*0.45,
        height:260,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:3,
        elevation:5
    }
})