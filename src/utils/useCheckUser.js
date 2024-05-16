import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";


const useCheckUser = () =>{
  const [isUser, setIsUser] = useState(false);
 
  useEffect(()=>{
   const checkUser = async () =>{
    try {
        const user = await AsyncStorage.getItem('user');
        setIsUser(true)
    } catch (error) {
        console.log(error)
    }
   }
   checkUser();
  },[])

  return isUser;
}

export default useCheckUser;