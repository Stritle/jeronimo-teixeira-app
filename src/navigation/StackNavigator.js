import React from "react";
import Home from "../pages/Home";
import Mensagens from "../pages/Mensagens";
import ProductDetailsScreen from "../pages/ProductDetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Mensagens"
        component={Mensagens}
        options={{
          headerStyle: styles.stackNavigator,
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Detalhes do Produto"
        component={ProductDetailsScreen}
        options={{
          headerStyle: styles.stackNavigator,
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  stackNavigator: {
    backgroundColor: "#268039",
  },
});

export default StackNavigator;
