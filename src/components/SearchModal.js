import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper';
import { colors } from '../styles/styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const SearchModal = ({setActiveSearch,searchQuery,setSearchQuery,productsData}) => {
 
  // const data = str.includes('a')

  const [filtereredProductsData, setFilteredProductsData] = useState([]);
  const {cart} = useSelector((state)=>state.cart);

  const filterProduct = () =>{
      const filteredProduct = productsData.filter((product)=>(
        // {}
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      ))
      setFilteredProductsData(filteredProduct)
  }
  useEffect(()=>{
    if(searchQuery.length > 1){
    filterProduct();
    }
  },[searchQuery])
  return (
    <View style={{
        width:'100%',
        height:'100%',
        position:'absolute',
        top:0,
        zIndex:100,
        backgroundColor:'white',
       }}>
        <Searchbar
        placeholder='Search Products'
        style={{backgroundColor:'white',
        borderWidth:1,borderColor:colors.theme_color,
        borderRadius:20,marginTop:5}}
        onChangeText={(text)=>setSearchQuery(text)}
        value={searchQuery}
        icon={()=>(
            <TouchableOpacity
            onPress={()=>setActiveSearch(false)}
            >
               <AntDesign name='arrowleft' size={24} color='#666' />
            </TouchableOpacity>
        )}

        />

        <ScrollView>
          <View style={{paddingVertical:10,paddingHorizontal:10}}>
            {filtereredProductsData.map((product)=>(
              <SearchItem
                 key={product.id}
                 item={product}
              />
            ))}
          </View>
        </ScrollView>
    </View>
  )
}

const SearchItem = ({item}) =>{
  const navigation= useNavigation();
  return(
    <Pressable style={{
      borderBottomWidth:1,
      borderColor:'grey',
      paddingVertical:5
    }}
    onPress={()=>navigation.navigate('ProductDetails',{item:item})}
    >
       <Text>{item.title}</Text>
    </Pressable>
  )
}

export default SearchModal

const styles = StyleSheet.create({})