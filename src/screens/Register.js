import { KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import {defaultStyle, title, inputStyling, pressableStyles} from '../styles/styles'
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import axios from 'axios'
import axiosInstance from '../axiosConfig/axiosInstance';
const Register = ({navigation}) => {
  // const {navigation} = props
  // const navigation = useNavigation()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const registerSubmit = async() =>{
     try {
      const user = {
        name: name,
        email: email,
        password: password
      }
      // const response  = await axios.post('http://192.168.29.185:8000/register',user)
      const response = axiosInstance.post('/register',user)
      showMessage({
        message:'Registration Successful',
        description:'You have been registered Successfully',
        type:'success'
      })
      setEmail('')
      setPassword('')
      setName('')
      navigation.navigate('Login')
     } catch (error) {
      console.log(error)
      showMessage({
        message:'Registration Failed',
        type:'danger'
      })
     }
  }
  return (
    <SafeAreaView style={defaultStyle}>
       <Text style={title}>Register</Text>
       <KeyboardAvoidingView>
        <TextInput
          placeholder='Enter Your Name'
          value={name}
          onChangeText={(text)=>setName(text)}
          style={inputStyling}
        />
        <TextInput
          placeholder='Enter Email'
          value={email}
          onChangeText={(text)=>setEmail(text)}
          style={inputStyling}
        />
        <TextInput
          placeholder='Enter Password'
          value={password}
          onChangeText={(text)=>setPassword(text)}
          style={inputStyling}
        />
        <Pressable style={pressableStyles.pressable}
        onPress={registerSubmit}
        >
          <Text style={pressableStyles.pressableText}>Register</Text>
        </Pressable>
        <Text style={{marginTop:20, textAlign:'center'}}>Already have an account?
         <Text style={{textDecorationLine:'underline',color:'blue'}}
         onPress={()=>navigation.navigate('Login')}
         >Login</Text>
        </Text>
        </KeyboardAvoidingView>   
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({})