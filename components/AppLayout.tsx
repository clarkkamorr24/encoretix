import { StyleSheet, View } from "react-native";
import { STATUS_BAR_HEIGHT } from "../lib/constant";
import { PropsWithChildren } from "react";
import Header from "./Header";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <View style={styles.main}>
      <Header />
      {children}
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  main: {
    paddingTop: STATUS_BAR_HEIGHT,
    flex: 1,
  },
});
