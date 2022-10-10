import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import { Octicons } from "@expo/vector-icons";

const RatingsPage = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>As minhas avaliações</Text>
        <View style={styles.content}>
          <Octicons name="feed-star" size={150} color="#268039"></Octicons>
        </View>
        <Text style={styles.text}>Ainda não fez avaliações, comece agora!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Produtos")}
        >
          <Text style={styles.buttonText}>Ver Produtos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    marginTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 15,
    color: "#268039",
    borderBottomWidth: 5,
    borderBottomColor: "#CFB617",
    fontWeight: "bold",
  },
  content: { alignItems: "center", marginTop: 50 },
  text: {
    color: "#268039",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 16,
    marginStart: 15,
    marginEnd: 15,
    marginTop: 30,
  },
  button: {
    backgroundColor: "#268039",
    marginTop: 30,
    paddingVertical: 10,
    marginHorizontal: 50,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 15,
  },
});

export default RatingsPage;
