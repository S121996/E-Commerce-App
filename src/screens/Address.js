import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { inputStyling, pressableStyles } from '../styles/styles'
import { useNavigation } from '@react-navigation/native';

const Address = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [street, setStreet] = useState('');
    const [landmark, setLandmark] = useState('');
    const [pincode, setPincode] = useState('');
   const navigations = useNavigation();

  return (
    <ScrollView style={{marginTop:20,flex:1,padding:15}}>
      <Text style={{fontWeight:'bold',fontSize:18,marginBottom:10}}>Add Address</Text>

      <View style={{marginTop:5}}>
        <Text style={{fontSize:15,fontWeight:'500', marginHorizontal:20}}>Enter Name</Text>
        <TextInput
          placeholder='Enter Name'
          style={inputStyling}
          value={name}
          onChangeText={(text)=>setName(text)}
        />
      </View>

      <View style={{marginTop:5}}>
        <Text style={{fontSize:15,fontWeight:'500', marginHorizontal:20}}>Phone Number</Text>
        <TextInput
          placeholder='Phone Number'
          style={inputStyling}
          value={phoneNumber}
          onChangeText={(text)=>setPhoneNumber(text)}
        />
      </View>

      <View style={{marginTop:5}}>
        <Text style={{fontSize:15,fontWeight:'500', marginHorizontal:20}}>House Number</Text>
        <TextInput
          placeholder='House Number'
          style={inputStyling}
          value={houseNumber}
          onChangeText={(text)=>setHouseNumber(text)}
        />
      </View>

      <View style={{marginTop:5}}>
        <Text style={{fontSize:15,fontWeight:'500', marginHorizontal:20}}>Street</Text>
        <TextInput
          placeholder='Street'
          style={inputStyling}
          value={street}
          onChangeText={(text)=>setStreet(text)}
        />
      </View>

      <View style={{marginTop:5}}>
        <Text style={{fontSize:15,fontWeight:'500', marginHorizontal:20}}>Landmark</Text>
        <TextInput
          placeholder='Landmark'
          style={inputStyling}
          value={landmark}
          onChangeText={(text)=>setLandmark(text)}
        />
      </View>

      <View style={{marginTop:5}}>
        <Text style={{fontSize:15,fontWeight:'500', marginHorizontal:20}}>Pincode</Text>
        <TextInput
          placeholder='Pincode'
          style={inputStyling}
          value={pincode}
          onChangeText={(text)=>setPincode(text)}
        />
      </View>

      <Pressable style={pressableStyles.pressable}
      onPress={()=>navigations.navigate('Payment')}
      >
        <Text style={pressableStyles.pressableText}>Continue</Text>
      </Pressable>
    </ScrollView>
  )
}

export default Address

const styles = StyleSheet.create({})