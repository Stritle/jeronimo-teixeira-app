import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import oleo from "../images/oleo.webp";

const Products = ({ data, navigation }) => {
  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.actionButton}>
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
            <TouchableOpacity
              onPress={() => navigation.navigate("ProductDetailsScreen")}
            >
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.69,
    shadowRadius: 4.65,

    elevation: 7,
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
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
  },
  price: { fontSize: 16, textAlign: "center", marginBottom: 5, color: "#fff" },
  buyButton: {
    paddingHorizontal: 11,
    paddingVertical: 5,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
});
export default Products;
