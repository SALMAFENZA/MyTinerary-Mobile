import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import { Provider } from "react-redux";
import { store }  from "./src/redux/store";
import Drawer from "./src/navigation/Drawer";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </Provider>
  );
}
