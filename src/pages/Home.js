import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Products from "../components/Products";
import Campanha from "../components/Campanha";
import Noticias from "../components/Noticias";
import Header from "../components/Header";

const list = [
  {
    id: 1,
    name: "castrol",
    price: "25,87",
  },
  {
    id: 2,
    name: "castrol",
    price: "25,87",
  },
  {
    id: 3,
    name: "castrol",
    price: "25,87",
  },
  {
    id: 4,
    name: "castrol",
    price: "25,87",
  },
  {
    id: 5,
    name: "castrol",
    price: "25,87",
  },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={styles.title}>Encomendar Produtos</Text>
        </TouchableOpacity>

        <FlatList
          horizontal
          pagingEnabled={true}
          style={styles.list}
          data={list}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Products navigation={navigation} data={item} />
          )}
        />
        <Campanha />
        <Noticias />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#268039",
  },
  title: {
    fontSize: 19,
    color: "#fff",
    paddingStart: 20,
    paddingTop: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
    maxHeight: 190,
  },
});
export default Home;
