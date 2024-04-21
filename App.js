import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigator from './src/navigations/Navigator'
import FlashMessage from 'react-native-flash-message'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const App = () => {
  return (
    <>
    <Provider store={store}>
     <Navigator />
     <FlashMessage
      position='top'
      style={{marginTop:0}}
     />
     </Provider>
    </>
  )
}

export default App

const styles = StyleSheet.create({})