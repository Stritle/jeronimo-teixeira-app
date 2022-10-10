import React from "react";
import Home from "../pages/Home";
import Mensagens from "../pages/Mensagens";
import ProductDetailsScreen from "../pages/ProductDetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "../components/Products";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Mensagens" component={Mensagens} />
      <Stack.Screen
        name="Detalhes do Produto"
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
