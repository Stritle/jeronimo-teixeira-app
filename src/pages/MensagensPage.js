import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const MensagensPage = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>As minhas mensagens</Text>
        <View style={styles.content}>
          <EvilIcons name="envelope" size={150} color="#268039"></EvilIcons>
        </View>
        <Text style={styles.text}>Não tem mensagens</Text>
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

export default MensagensPage;
