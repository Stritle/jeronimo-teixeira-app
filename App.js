import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./src/components/Header";
import Home from "./src/pages/Home";
import AuthDrawerNavigation from "./src/navigation/AuthDrawerNavigation";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AuthDrawerNavigation />
      </NavigationContainer>
    </>
  );
}
