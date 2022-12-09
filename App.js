import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import { Provider } from "react-redux";
import { store }  from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </Provider>
  );
}
