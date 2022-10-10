import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import oil from "../images/oleo.webp";

const ProductDetailsScreen = ({
  nome,
  pesoLiquido,
  dimensoes,
  tara,
  pesoTotal,
  material,
  modelo,
  tipologia,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={oil} style={styles.imageContent}></Image>
        <View style={styles.imageContainer}>
          <Text style={styles.titleImageBold}>Butano</Text>
          <Text style={styles.titleImage}>12kg</Text>
        </View>
      </View>

      <Text style={styles.titleContent}>Características Técnicas</Text>
      <View style={styles.itemContent}>
        <Text style={styles.textContent}>Dimensões (mm)</Text>
        <Text style={styles.textContent}>{dimensoes}</Text>
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.textContent}>Tara (kg)</Text>
        <Text style={styles.textContent}>{tara}</Text>
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.textContent}>Peso Tolal (kg)</Text>
        <Text style={styles.textContent}>{pesoTotal}</Text>
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.textContent}>Peso Liquido (kg)</Text>
        <Text style={styles.textContent}>{pesoLiquido}</Text>
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.textContent}>Material</Text>
        <Text style={styles.textContent}>{material}</Text>
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.textContent}>Modelo</Text>
        <Text style={styles.textContent}>{modelo}</Text>
      </View>
      <View>
        <Text style={styles.textContent}>Tipologia</Text>
        <Text style={styles.textContent}>{tipologia}</Text>
      </View>
      <TouchableOpacity style={styles.buttonContent}>
        <Text style={styles.buttonText}>Selecionar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#268039",
    marginStart: 15,
    marginEnd: 15,
    marginTop: 30,
    flexDirection: "column",
    borderRadius: 15,
  },
  content: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#268039",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  imageContainer: { marginLeft: 30 },
  titleImageBold: { fontWeight: "bold", color: "#268039", fontSize: 15 },
  titleImage: { color: "#268039" },
  imageContent: {
    height: 120,
    width: 120,
    marginVertical: 20,
    marginStart: 30,
  },
  itemContent: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  titleContent: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "bold",
    marginStart: 15,
    marginVertical: 18,
  },
  textContent: {
    color: "#fff",
    fontSize: 13,
    marginBottom: -7,
    paddingTop: 10,
    marginStart: 15,
  },
  buttonContent: {
    color: "#fff",
    backgroundColor: "#CFB617",
    marginTop: 15,
    marginBottom: 30,
    alignItems: "center",
    marginHorizontal: 50,
    paddingVertical: 8,
    borderRadius: 15,
  },
  buttonText: {
    textTransform: "uppercase",
    color: "#268039",
  },
});

export default ProductDetailsScreen;
