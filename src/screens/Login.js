import { KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {defaultStyle, title, inputStyling, pressableStyles} from '../styles/styles'
import { showMessage } from 'react-native-flash-message';
import axios from 'axios'
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axiosInstance from '../axiosConfig/axiosInstance';
import useCheckUser from '../utils/useCheckUser';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isUser = useCheckUser();
  useEffect(()=>{
    if(isUser){
      navigation.navigate('Main')
    }
  },[isUser,navigation])
  const loginSubmit = async() =>{
    try {
     const user = {email, password}
    //  const response  = await axios.get('http://192.168.29.185:8000/login',user);
    const response = await axiosInstance.post('/login',user)
     const token = response.data.token
     showMessage({
       message:'Login Successful',
       description:'You have been registered Successfully',
       type:'success'
     })
     AsyncStorage.setItem('user', token)
     setEmail('')
     setPassword('')
     navigation.replace('Home')
    } catch (error) {
     console.log(error)
     showMessage({
       message:'Login Failed',
       type:'danger'
     })
    }
 }
  return (
    <SafeAreaView style={defaultStyle}>
       <Text style={title}>Login</Text>
       <KeyboardAvoidingView>
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
        onPress={loginSubmit}
        >
          <Text style={pressableStyles.pressableText}>Login</Text>
        </Pressable>
        <Text style={{marginTop:20, textAlign:'center'}}>Don't have an account?
         <Text style={{textDecorationLine:'underline',color:'blue'}}
         onPress={()=>navigation.navigate('Register')}
         >Register</Text>
        </Text>
        </KeyboardAvoidingView>   
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})