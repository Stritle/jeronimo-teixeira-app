import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ProdutosPage from "../pages/ProdutosPage";
import EncomendasPage from "../pages/EncomendasPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import StackNavigator from "./StackNavigator";
import RatingsPage from "../pages/RatingsPage";
import CondiçoesPage from "../pages/CondiçoesPage";

const AuthDrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#268039",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
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
        component={EncomendasPage}
        options={{
          drawerIcon: (config) => (
            <Feather name="shopping-cart" size={20} color="#268039"></Feather>
          ),
        }}
      />
      <Drawer.Screen
        name="Produtos"
        component={ProdutosPage}
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
        component={ProductDetailsPage}
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
        component={EncomendasPage}
        options={{
          drawerIcon: (config) => (
            <Feather name="shopping-cart" size={20} color="#268039"></Feather>
          ),
        }}
      />
      <Drawer.Screen
        name="As minhas avaliações"
        component={RatingsPage}
        options={{
          drawerIcon: (config) => (
            <Feather name="star" size={20} color="#268039"></Feather>
          ),
        }}
      />

      <Drawer.Screen
        name="Sobre a Jerónimo e Teixeira"
        component={ProductDetailsPage}
        options={{
          drawerIcon: (config) => (
            <Entypo name="info" size={18} color="#268039"></Entypo>
          ),
        }}
      />
      <Drawer.Screen
        name="Condiçoes de utilização"
        component={CondiçoesPage}
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
