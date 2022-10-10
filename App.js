import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
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
