import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import StackCity from "./StackCity";
import { FadeInLeft, FadeInRight } from "react-native-reanimated";
import Home from "../screens/Home";
import Cities from "../screens/Cities";
import DrawerContent from "./DrawerContent";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
const DrawerNavigation = createDrawerNavigator();

export default function Drawer() {
  const loggedIn = useSelector((state) => state.user.logged);

  return (
    <DrawerNavigation.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#FA5EEF",
        },
        drawerItemStyle: {
          backgroundColor: "#FACBAE",
          borderRadius: 5,
        },
        headerStyle: {
          backgroundColor: "#FA5EEF",
        },
        headerTitleStyle: {
          color: "#FBE5E5",
        },
        drawerLabelStyle: {
          color: "#5C1313",
          fontStyle: "italic",
          fontWeight: "bold",
        },
        headerTintColor: "#FBE5E5",
      }}
    >
      <DrawerNavigation.Screen name="Home" component={Home} />
      <DrawerNavigation.Screen name="Cities" component={Cities} />
      <DrawerNavigation.Screen
        name="City"
        component={StackCity}
        initialParams={{ id: "" }}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
          drawerItemStyle: { display: "none" },
        }}
      />
      {loggedIn && (
        <DrawerNavigation.Screen
          name="My Tineraries"
          component={StackMyTineraries}
        />
      )}
      <DrawerNavigation.Screen name="Sign in" component={SignIn} />
      <DrawerNavigation.Screen name="Sign up" component={SignUp} />
    </DrawerNavigation.Navigator>
  );
}
