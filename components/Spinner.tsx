import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { ET_PRIMARY_BLUE } from "../lib/constant";

const Spinner = () => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size="large" color={ET_PRIMARY_BLUE} />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
