import { Image, StyleSheet, Text, View } from "react-native";

type Item = {
  id: number;
  name: string;
};

type ListScreenItemProps = {
  item: Item;
};

const ListScreenItems = ({ item }: ListScreenItemProps) => {
  return (
    <View style={styles.listContainer}>
      <Image
        source={require("../assets/BigEyedPhish.png")}
        alt="logo"
        style={styles.listImage}
      />
      <View style={styles.textContainer}>
        <Text>FRIDAY, MARCH 1, 2024</Text>
        <Text style={styles.listText}>{item.name}</Text>
        <Text>CHICAGO THEATER, CHICAGO, IL</Text>
      </View>
    </View>
  );
};

export default ListScreenItems;

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    flexDirection: "row",
  },
  textContainer: {
    flexGrow: 1,
    paddingLeft: 10,
    gap: 5,
    justifyContent: "center",
    backgroundColor: "white",
  },
  listText: {
    fontSize: 16,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  listImage: {
    height: 105,
    width: 105,
  },
});
