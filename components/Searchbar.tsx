import {
  Image,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import { ET_BLACK, ET_PRIMARY_BLUE } from "../lib/constant";

export type Props = {
  handleSearch: (e: string) => void;
};

const Searchbar = ({ handleSearch }: Props) => {
  return (
    <View style={styles.textContainer}>
      <TextInput
        placeholder="Search for Attractions"
        style={styles.textInput}
        placeholderTextColor={ET_BLACK}
        onChangeText={(e) => handleSearch(e)}
      />
      <Image
        source={require("../assets/search_icon.png")}
        alt="logo"
        style={styles.search}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  textContainer: {
    width: 100,
    flexGrow: 1,
  },
  textInput: {
    height: 40,
    borderColor: ET_PRIMARY_BLUE,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 35,
    paddingRight: 20,
  },
  search: {
    position: "absolute",
    top: 7,
    left: 3,
    height: 28,
    width: 28,
  },
});
