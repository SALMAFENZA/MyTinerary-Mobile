import React , { useEffect, useState } from 'react'
import {useUserSignInMutation} from '../redux/reducers/usersAPI'
import { useDispatch, useSelector } from 'react-redux';
import { logIn , setCredentials } from '../redux/reducers/userSlice';
import { ScrollView } from 'react-native-gesture-handler';
import { ImageBackground, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import Input from '../components/Input';
import style from '../styles/itinerariesStyle';





export default function SignIn() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const actUser = useSelector(state=>state.user.user)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  let [userSignIn] = useUserSignInMutation()


  const inputArray =[
    {
        name: "Email",
        onChangeText: value=>setEmail(value),
        placeholder: "Write your email here",
    },
    {
        name: "Password",
        onChangeText: value=>setPassword(value),
        placeholder: "Insert your password",
    }
]
async function signUserForm(){
  let data = {
      email,
      password,
  }
  try {
      let payload = await userSignIn(data).unwrap()
      if (payload) {
          let {token, user} = payload.response
          dispatch(setCredentials(user))
          token && await AsyncStorage.setItem("token",token)
          navigation.navigate('Home')
          dispatch(logIn())
      }
  }catch (err) {
      console.log(err)
  }
}

const image = { uri: "https://c.wallhere.com/photos/c5/be/Dubai_skyline_city_cityscape-1783753.jpg!d" };

return (
  <ImageBackground source={image} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
      <ScrollView>
          <Input inputsData={inputArray} event={signUserForm} />
          <View>
              <Text style={style.welcome}>{actUser?.name}!</Text>
          </View>
      </ScrollView>
  </ImageBackground>
)
}

