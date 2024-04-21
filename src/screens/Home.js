import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors, defaultStyle } from '../styles/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Badge } from 'react-native-paper'
import SearchModal from '../components/SearchModal'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'

const Home = ({navigation}) => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [productsData, setProductsData] = useState([]);
  const {cart} = useSelector((state)=>state.cart)
  const fetchProductData = async() =>{
    try {
      const response = await axios.get('https://dummyjson.com/products')
      setProductsData(response.data.products);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchProductData();
  },[]);
  const openDrawer = () =>{
    navigation.openDrawer()
  }
  return (
    <>
    {activeSearch && (
      <SearchModal
      setActiveSearch={setActiveSearch}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      productsData={productsData}
      />
    )}
    <SafeAreaView style={defaultStyle}>
      {/* Header */}
      <View style={{padding:10,
      backgroundColor:colors.theme_color,
      flexDirection:'row',
      alignItems:'center'
      }}>
        <Pressable onPress={openDrawer}>
          <MaterialCommunityIcons name='menu' size={25} color='white' />
        </Pressable>
        <Pressable
        onPress={()=>setActiveSearch(true)}
        style={{
          flexDirection:'row',
          alignItems:'center',
          marginHorizontal:7,
          gap:10,
          backgroundColor:'white',
          borderRadius:4,
          height:40,
          flex:1,
        }}>
          <Ionicons name='search-outline' size={24} color='#333'  />
          <TextInput
           placeholder='Search Products....'
           editable={false}
           selectTextOnFocus={false}
          />
      
        </Pressable>
        <Pressable onPress={()=>navigation.navigate('Cart')}>
          <MaterialCommunityIcons name='cart' size={28} color='white' />
          <Badge size={17} 
          style={{position:'absolute', top:-4,right:-4}}
          >{cart.length}</Badge>
        </Pressable>
      </View>
      {/* Product Listing */}
      <ScrollView>
        <Text style={{
          fontSize:18,fontWeight:'bold',padding:10
        }}>New And Popular Products</Text>
      <View style={{
        flexDirection:'row',
        // justifyContent:'s'
        flexWrap:'wrap',
        marginLeft:10
      }}>
        {productsData && productsData.map((item)=>(
          <ProductCard item={item} key={item.id} />
        ))}
      </View>

      <Footer />
      </ScrollView>
    </SafeAreaView>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})