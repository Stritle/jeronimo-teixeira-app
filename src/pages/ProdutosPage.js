import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";

const ProdutosPage = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} />
      <View>
        <Text>ProdutosScreen</Text>
      </View>
    </>
  );
};

export default ProdutosPage;
