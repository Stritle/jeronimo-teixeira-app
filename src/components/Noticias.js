import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import cardBackground from "../images/cardBackground.png";

const Noticias = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Noticias e Eventos</Text>
      <View style={styles.content}>
        <TouchableOpacity style={styles.contentButton} activeOpacity={0.8}>
          <ImageBackground
            style={styles.contentBackground}
            source={cardBackground}
          >
            <Text style={styles.cardTextBold}>
              Estamos a preparar o calor que precisa para este inverno.
            </Text>
            <Text style={styles.cardText}>Fique atento às novidades.</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#fff",
    paddingStart: 20,
    paddingTop: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  content: {
    marginStart: 20,
    marginEnd: 20,
    marginTop: 10,
    marginBottom: 50,
    borderRadius: 5,
    borderTopRightRadius: 40,
    borderWidth: 1,
    borderColor: "#fff",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  contentBackground: { height: 200 },
  contentButton: {
    overflow: "hidden",
  },
  cardTextBold: {
    marginTop: 113,
    marginLeft: 40,
    fontWeight: "bold",
    marginEnd: 90,
    color: "#fff",
    fontSize: 14,
  },
  cardText: {
    marginLeft: 40,
    color: "#fff",
    fontSize: 13,
    marginTop: 2,
  },
});

export default Noticias;
