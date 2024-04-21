import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Profile from "../screens/Profile";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from "../styles/styles";
import ProductDetails from "../screens/ProductDetails";
import Cart from "../screens/Cart";
const Navigator = () =>{
   const Stack = createNativeStackNavigator()
   const Tab = createBottomTabNavigator();
   const Drawer = createDrawerNavigator();
   
   const BottomTabs = () =>{
      return(
        <Tab.Navigator screenOptions={{
            headerShown:false
        }}>
          <Tab.Screen name='Home' component={Home}
          options={{
            tabBarIcon:({focused})=>
            focused ? (
              <MaterialCommunityIcons name='home' size={22} color={colors.theme_color} />
            ):(
              <MaterialCommunityIcons name='home' size={22} color='black'  />
            )
          }}
          /> 
          <Tab.Screen name='Profile' component={Profile}
          options={{
            tabBarIcon:({focused})=>
            focused ? (
              <MaterialCommunityIcons name='account' size={22} color={colors.theme_color} />
            ):(
              <MaterialCommunityIcons name='account-outline' size={22} color='black'  />
            )
          }}
          /> 
        </Tab.Navigator>
      )
   }
   const StackNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName="Main" screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name='Main' component={BottomTabs} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='ProductDetails' component={ProductDetails} />
            <Stack.Screen name='Cart' component={Cart} />
        </Stack.Navigator>
    )
   }
   const RootDrawerNavigator = () => {
     return(
        <Drawer.Navigator screenOptions={{
            headerShown:false
        }}>
          <Drawer.Screen name='MainDrawer' component={StackNavigator} />
        </Drawer.Navigator>
     )
   }
    return(
     <NavigationContainer>
       <RootDrawerNavigator />
     </NavigationContainer>
    )
}

export default Navigator;