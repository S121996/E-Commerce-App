import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation();
  const handleLogout = async() =>{
    try {
      await AsyncStorage.removeItem('user');
      navigation.navigate('Login')
    } catch (error) {
       console.log(error)
    }
  }
  return (
    <View>
      <Text>Profile</Text>
      <Button
      title='Logout'
      onPress={handleLogout}
      />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})