import React from "react";
import Encomendas from "../pages/Encomendas";
import Home from "../pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProdutosScreen from "../pages/ProdutosScreen";
import Mensagens from "../pages/Mensagens";
import ProductDetailsScreen from "../pages/ProductDetailsScreen";

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Encomendas" component={Encomendas} />
      <Stack.Screen name="Produtos" component={ProdutosScreen} />
      <Stack.Screen name="Mensagens" component={Mensagens} />
      <Stack.Screen name="Detalhes Produto" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
