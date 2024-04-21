import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors, defaultStyle } from '../styles/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Badge } from 'react-native-paper'
import SearchModal from '../components/SearchModal'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { AirbnbRating } from 'react-native-ratings'
import { addItem } from '../redux/reducer/CartReducer'
import { useDispatch, useSelector } from 'react-redux'

const ProductDetails = ({ navigation, route }) => {
    const [activeSearch, setActiveSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [productsData, setProductsData] = useState([]);
    const dispatch = useDispatch();
    const {cart} = useSelector((state)=>state.cart);
    console.log('cart')
    console.log(cart)
    // console.log(route.params)
    const { item } = route.params
    const fetchProductData = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products')
            setProductsData(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProductData();
    }, []);
    const handleGoBack = () => {
        navigation.goBack()
    }
    const handleAddToCart =(item) =>{
        dispatch(addItem(item))
    }
    return (
        <View style={{ flex: 1 }}>
            {/* Header */}
            <View style={{
                padding: 10,
                backgroundColor: colors.theme_color,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Pressable onPress={handleGoBack}>
                    <AntDesign name='arrowleft' size={25} color='white' />
                </Pressable>
                <Pressable
                    onPress={() => setActiveSearch(true)}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: 7,
                        gap: 10,
                        backgroundColor: 'white',
                        borderRadius: 4,
                        height: 40,
                        flex: 1,
                    }}>
                    <Ionicons name='search-outline' size={24} color='#333' />
                    <TextInput
                        placeholder='Search Products....'
                        editable={false}
                        selectTextOnFocus={false}
                    />

                </Pressable>
                <Pressable
                onPress={()=>navigation.navigate('Cart')}
                >
                    <MaterialCommunityIcons name='cart' size={28} color='white' />
                    <Badge size={17}
                        style={{ position: 'absolute', top: -4, right: -4 }}
                    >{cart.length}</Badge>
                </Pressable>
            </View>

            <View style={{ backgroundColor: 'white' }}>
                <Image
                    source={{ uri: item.images[0] }}
                    style={{ width: '100%', height: 300, resizeMode: 'contain' }}

                />
            </View>
            <View style={{ marginTop: 10, padding: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title.substring(0, 20)}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{ fontSize: 17, fontWeight: '500' }}>₹{item.price}</Text>
                    <AirbnbRating
                        count={5}
                        showRating={false}
                        size={18}
                        defaultRating={item.rating.rate}
                        isDisabled={true}
                        starContainerStyle={{ marginLeft: 10 }}
                    />
                </View>
            </View>
            <Text style={{height:1, borderColor:'#D0D0D0',borderWidth:0.7}} />
            <Pressable style={{
                padding:10,borderRadius:20,
                justifyContent:'center',backgroundColor:'#FFC72C',
                alignItems:'center',marginHorizontal:10,marginVertical:10
            }}>
                <Text style={{fontSize:18,fontWeight:'500'}}>Buy Now</Text>
            </Pressable>

            <Pressable style={{
                padding:10,borderRadius:20,
                justifyContent:'center',backgroundColor:'#FFC72C',
                alignItems:'center',marginHorizontal:10
            }}
            // onPress={()=>addItem(items)}
            onPress={()=>handleAddToCart(item)}
            >
                <Text style={{fontSize:18,fontWeight:'500'}}>Add To Cart</Text>
            </Pressable>

            <View style={{marginTop:10,padding:10}}>
                <Text style={{fontSize:16,fontWeight:'400'}}>{item.description}</Text>
            </View>
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({})