import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import oleo from "../images/oleo.webp";

const Products = ({ navigation, data }) => {
  return (
    <View style={styles.content}>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate("Detalhes do Produto")}
      >
        <View>
          <Image source={oleo} style={styles.image}></Image>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.price}>{data.price} €</Text>
          <View
            style={{
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "#fff",
              borderTopLeftRadius: 11,
              borderBottomRightRadius: 11,
            }}
          >
            <TouchableOpacity>
              <Text style={styles.buyButton}>COMPRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginHorizontal: 5,
    marginTop: 10,
    borderRadius: 15,
  },

  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginRight: 3,
    marginTop: 10,
  },
  image: {
    height: 80,
    width: 80,
    marginLeft: 9,
    marginBottom: 5,
  },
  name: {
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
  },
  price: { fontSize: 13, textAlign: "center", marginBottom: 5, color: "#fff" },
  buyButton: {
    paddingHorizontal: 11,
    paddingVertical: 4,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
});
export default Products;
