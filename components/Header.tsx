import { View, StyleSheet, Image } from "react-native";
import { ET_BLACK } from "../lib/constant";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/logo_horizontal.png")}
        alt="logo"
        style={styles.logo}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 85,
    backgroundColor: ET_BLACK,
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  logo: {
    marginLeft: 20,
  },
});
