import { Text, View, StyleSheet, Pressable } from "react-native";
import { ET_PRIMARY_BLUE } from "../lib/constant";

type ButtonProps = {
  title: string;
  handleSubmit: () => void;
};

const ETButton = ({ title, handleSubmit }: ButtonProps) => {
  return (
    <View>
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default ETButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    height: 40,
    backgroundColor: ET_PRIMARY_BLUE,
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  text: {
    color: "white",
  },
});
