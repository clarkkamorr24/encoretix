import { Image, StyleSheet, Text, View } from "react-native";
import { ET_PRIMARY_BLUE } from "../lib/constant";

const NoResult = () => {
  return (
    <View style={styles.noResult}>
      <Image
        source={require("../assets/sadface_icon.png")}
        alt="logo"
        style={styles.noResultImage}
      />
      <Text style={styles.noResultText}>No Result Found</Text>
    </View>
  );
};

export default NoResult;

const styles = StyleSheet.create({
  noResult: {
    marginTop: 60,
    marginHorizontal: 40,
    paddingVertical: 30,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },
  noResultText: {
    color: ET_PRIMARY_BLUE,
    fontSize: 25,
    fontWeight: "400",
  },
  noResultImage: {
    height: 43,
    width: 43,
  },
});
