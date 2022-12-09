import React, { useEffect, useState } from 'react'
import { DrawerContentScrollView,DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { color } from 'react-native-reanimated'
import { logOut } from '../redux/reducers/userSlice'
import SignIn from "../screens/SignIn"
import SignUp from '../screens/SignUp'



export default function DrawerContent(props) { 
    const logged = useSelector(state => state.user.logged)

    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [blackList,setBlackList] = useState([])

    const signOut = async () => {
        await  AsyncStorage.removeItem('token')
        dispatch(logOut())    
        navigation.navigate("Home")
    }

    let filteredProps = props
    useEffect(() => {
 
            if (logged) {
                setBlackList(["Sign in","Sign up"])
    
            } else{
                setBlackList([])
            }
       
        
    },[logged])

    filteredProps = {
        ...props,
        state: {
            ...props.state,
            routeNames: props.state.routeNames.filter(
                (routeName) => !blackList.includes(routeName)),
            routes: props.state.routes.filter(
                (route) => !blackList.some(r=>r === route.name)), 
        }
    }

    return (
        <DrawerContentScrollView {...filteredProps}>
            <DrawerItemList {...filteredProps} />
            {logged &&
            <DrawerItem style={
            {backgroundColor: '#FAF3E0',
                }
            }
            label="Sign Out"
            onPress={signOut}
            />
        }     
        </DrawerContentScrollView>
        
    )
    
}