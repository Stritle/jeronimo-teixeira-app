import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Linking } from "react-native";

const AboutUsPage = ({ navigation }) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>Sobre a Jerónimo & Teixeira</Text>
        <Text style={styles.titleText}>Breve História</Text>
        <Text style={styles.titleBold}>
          Uma história de sucesso que começou com uma pequena mercearia e
          comércio de materiais de construção.
        </Text>
        <Text style={styles.text}>
          A JERÓNIMO & TEIXEIRA, S.A. foi fundada em 1988, depois do seu atual
          administrador José Teixeira ter vencido uma jornada de 5 dias entre
          Lisboa e Carviçais montado num motociclo de duas velocidades.
        </Text>
        <Text style={styles.text}>
          Assim que chegou a esta aldeia tomou conta de uma pequena mercearia da
          sua família e iniciou uma história incrível de sucesso que teve como
          base o seu trabalho, esforço e dedicação. O crescimento e
          diversificação por diversas áreas do seu negócio levou a empresa a
          transformar-se numa das entidades mais conceituadas na região.
        </Text>
        <Text style={styles.text}>
          Atualmente, a empresa permanece focada na satisfação dos clientes no
          âmbito da comercialização de combustíveis, lubrificantes, gás e
          materiais de construção, mantendo a sua sede e armazém principal em
          Carviçais, Torre de Moncorvo. Em agosto de 2020 no âmbito da sua
          estratégia de expansão, a Jerónimo & Teixeira, S.A. abriu um Espaço
          Comercial e Escritórios em Vila Real.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("https://jeronimoteixeira.pt")}
        >
          <Text style={styles.buttonText}>Visitar o nosso website</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  titleText: {
    marginTop: 20,
    marginStart: 25,
    fontSize: 20,
  },
  titleBold: {
    marginTop: 15,
    marginStart: 25,
    marginEnd: 25,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "bold",
  },

  text: {
    color: "#000",
    textAlign: "justify",
    fontSize: 15,
    marginStart: 25,
    marginEnd: 25,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#268039",
    marginTop: 30,
    marginBottom: 30,
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
export default AboutUsPage;
