import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import logo from "../images/jeronimoLogo.png";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight;

const Header = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <AntDesign name="bars" size={30} color="#fff"></AntDesign>
        </TouchableOpacity>
      </View>
      <View style={styles.contentLogo}>
        <Image style={styles.logo} source={logo}></Image>
      </View>
      <View style={styles.content}>
        <View style={styles.items}>
          <TouchableOpacity
            style={styles.icone}
            onPress={() => alert("259321564")}
          >
            <MaterialIcons name="contact-support" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icone}
            onPress={() => navigation.navigate("Mensagens")}
          >
            <EvilIcons name="envelope" size={38} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#268039",
    flexDirection: "row",
    paddingStart: 10,
    paddingEnd: 10,
    paddingBottom: 1,
    ...Platform.select({
      ios: {
        paddingTop: 10,
      },
      android: { paddingTop: statusBarHeight + 30 },
    }),
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#268039",
    marginHorizontal: 10,
  },
  contentLogo: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#268039",
    marginHorizontal: 1,
  },
  logo: {
    height: 70,
    width: 60,
    marginBottom: 15,
  },
  items: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#268039",
  },
  icone: {
    paddingLeft: 5,
  },
});

export default Header;
