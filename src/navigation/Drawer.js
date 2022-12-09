import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { FadeInLeft, FadeInRight } from 'react-native-reanimated'
import Home from '../screens/Home'
const DrawerNavigation = createDrawerNavigator()



export default function Drawer() {
  return (
    <Home/>
  )
}
