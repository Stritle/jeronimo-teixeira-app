import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Home from "../pages/Home";
import ProdutosScreen from "../pages/ProdutosScreen";
import Encomendas from "../pages/Encomendas";
import ProductDetailsScreen from "../pages/ProductDetailsScreen";

const AuthDrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerStyle: {},
        drawerActiveTintColor: "#268039",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: (config) => (
            <Ionicons
              name="ios-home-outline"
              size={20}
              color="#268039"
            ></Ionicons>
          ),
        }}
      />
      <Drawer.Screen
        name="Encomendas"
        component={Encomendas}
        options={{
          drawerIcon: (config) => (
            <Feather name="shopping-cart" size={20} color="#268039"></Feather>
          ),
        }}
      />
      <Drawer.Screen
        name="Produtos"
        component={ProdutosScreen}
        options={{
          drawerIcon: (config) => (
            <Ionicons
              name="pricetags-outline"
              size={20}
              color="#268039"
            ></Ionicons>
          ),
        }}
      />
      <Drawer.Screen
        name="Dados pessoais"
        component={ProductDetailsScreen}
        options={{
          drawerIcon: (config) => (
            <Ionicons
              name="person-outline"
              size={20}
              color="#268039"
            ></Ionicons>
          ),
        }}
      />
      <Drawer.Screen
        name="As minhas encomendas"
        component={Encomendas}
        options={{
          drawerIcon: (config) => (
            <Feather name="shopping-cart" size={20} color="#268039"></Feather>
          ),
        }}
      />
      <Drawer.Screen
        name="As minhas avaliações"
        component={ProductDetailsScreen}
        options={{
          drawerIcon: (config) => (
            <Feather name="star" size={20} color="#268039"></Feather>
          ),
        }}
      />
      <Drawer.Screen
        name="Parcerias e descontos"
        component={ProductDetailsScreen}
        options={{
          drawerIcon: (config) => (
            <FontAwesome
              name="handshake-o"
              size={18}
              color="#268039"
            ></FontAwesome>
          ),
        }}
      />
      <Drawer.Screen
        name="Sobre a Jerónimo e Teixeira"
        component={ProductDetailsScreen}
        options={{
          drawerIcon: (config) => (
            <Entypo name="info" size={18} color="#268039"></Entypo>
          ),
        }}
      />
      <Drawer.Screen
        name="Condiçoes de utilização"
        component={ProductDetailsScreen}
        options={{
          drawerIcon: (config) => (
            <Feather name="check-square" size={20} color="#268039"></Feather>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AuthDrawerNavigation;