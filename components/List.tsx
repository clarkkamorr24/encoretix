import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { Attraction } from "../types/type";

function handlePress(id: string) {
  router.push({
    pathname: `lists/${id}`,
  });
}

const List = ({ item }: { item: Attraction }) => {
  return (
    <Pressable
      style={styles.listContainer}
      onPress={() => handlePress(item.id)}
    >
      <Image
        source={{ uri: item.images[0].url }}
        alt="logo"
        style={styles.listImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.listText} ellipsizeMode="tail">
          {item.name}
        </Text>
      </View>
    </Pressable>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    flexDirection: "row",
  },
  textContainer: {
    flexShrink: 1,
    flexGrow: 1,
    paddingLeft: 10,
    justifyContent: "center",
    backgroundColor: "white",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  listText: {
    fontSize: 16,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  listImage: {
    height: 60,
    width: 105,
  },
});
