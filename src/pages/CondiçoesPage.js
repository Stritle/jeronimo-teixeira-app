import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const CondiçoesPage = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>condições de utilização</Text>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.firstButton}
            onPress={() => navigation.navigate("Produtos")}
          >
            <View style={styles.viewButton}>
              <MaterialCommunityIcons
                style={styles.iconeButton}
                name="account-question-outline"
                size={20}
                color="#268039"
              ></MaterialCommunityIcons>
              <Text style={styles.buttonText}>Perguntas frequentes</Text>
            </View>
            <View>
              <EvilIcons
                style={styles.iconeAvançar}
                name="arrow-right"
                size={40}
                color="#268039"
              ></EvilIcons>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.middleButton}
            onPress={() => navigation.navigate("Produtos")}
          >
            <View style={styles.viewButton}>
              <MaterialCommunityIcons
                style={styles.iconeButton}
                name="security"
                size={20}
                color="#268039"
              ></MaterialCommunityIcons>
              <Text style={styles.buttonText}>Politica de privacidade</Text>
            </View>
            <View>
              <EvilIcons
                style={styles.iconeAvançar}
                name="arrow-right"
                size={40}
                color="#268039"
              ></EvilIcons>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lastButton}
            onPress={() => navigation.navigate("Produtos")}
          >
            <View style={styles.viewButton}>
              <Feather
                style={styles.iconeButton}
                name="check-square"
                size={20}
                color="#268039"
              ></Feather>
              <Text style={styles.buttonText}>Termos e condições</Text>
            </View>
            <View>
              <EvilIcons
                style={styles.iconeAvançar}
                name="arrow-right"
                size={40}
                color="#268039"
              ></EvilIcons>
            </View>
          </TouchableOpacity>
        </View>
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
  content: {
    marginTop: 40,
    marginStart: 25,
    marginEnd: 25,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  firstButton: {
    marginTop: 10,
    paddingVertical: 25,
    borderRadius: 20,
    borderBottomColor: "#B4B4B0",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  middleButton: {
    marginBottom: 15,
    paddingVertical: 20,
    borderRadius: 20,
    borderBottomColor: "#B4B4B0",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lastButton: {
    marginBottom: 30,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "#268039",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 2,
  },
  viewButton: { flexDirection: "row" },
  iconeButton: {
    marginLeft: 15,
  },
  iconeAvançar: { marginRight: 25 },
});

export default CondiçoesPage;
