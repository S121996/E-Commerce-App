import { StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'
import React from 'react'

const Footer = () => {
    return (
        <View style={{ backgroundColor: '#444', padding: 20 }}>
            <View style={{ flex: 1 ,marginBottom:20}}>
                <Text style={{
                    color: 'white', fontSize: 16,
                    fontWeight: 'bold',
                }}>Call us by 24/7</Text>
           
            <TouchableOpacity
                onPress={() => Linking.openURL('tel:+91111111111')}
            >
                <Text style={{
                    color: 'white', fontSize: 16,
                    fontWeight: 'bold', textDecorationLine: 'underline',
                }}>+91 11111111111</Text>
            </TouchableOpacity>
            </View>

            <View style={{ flex: 1 ,marginBottom:20}}>
           
            <TouchableOpacity
                onPress={() => Linking.openURL('tel:+91111111111')}
            >
                <Text style={{
                    color: 'white', fontSize: 17,
                    fontWeight: 'bold', textDecorationLine: 'underline',
                }}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Linking.openURL('tel:+91111111111')}
            >
                <Text style={{
                    color: 'white', fontSize: 17,
                    fontWeight: 'bold', textDecorationLine: 'underline',
                }}>About Us</Text>
            </TouchableOpacity>
            </View>

            <View style={{ flex: 1 ,marginBottom:20}}>
           
            <TouchableOpacity
                onPress={() => Linking.openURL('tel:+91111111111')}
            >
                <Text style={{
                    color: 'white', fontSize: 17,
                    fontWeight: 'bold', textDecorationLine: 'underline',
                }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Linking.openURL('tel:+91111111111')}
            >
                <Text style={{
                    color: 'white', fontSize: 17,
                    fontWeight: 'bold', textDecorationLine: 'underline',
                }}>My Account</Text>
            </TouchableOpacity>
            </View>
            <View style={{ flex: 1 ,marginBottom:20}}>
           
           <TouchableOpacity
               onPress={() => Linking.openURL('tel:+91111111111')}
           >
               <Text style={{
                   color: 'white', fontSize: 17,
                   fontWeight: 'bold', textDecorationLine: 'underline',
               }}>Contact Us</Text>
           </TouchableOpacity>
           <TouchableOpacity
               onPress={() => Linking.openURL('tel:+91111111111')}
           >
               <Text style={{
                   color: 'white', fontSize: 17,
                   fontWeight: 'bold', textDecorationLine: 'underline',
               }}>About Us</Text>
           </TouchableOpacity>
           </View>
            <View style={{
                backgroundColor:'#555',
                padding:20,alignItems:'center',marginTop:10
            }}>
               <Text style={{color:'white'}}>copyright @ All Rights Reserved</Text>
               <View>
                <TouchableOpacity>
                    <Text style={{color:'white'}}>Terms Of Use</Text>
                </TouchableOpacity>
               </View>
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({})