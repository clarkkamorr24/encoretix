import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  name: string | undefined;
};

const ListScreenHeader = ({ name }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/twitter.png")}
          alt="logo"
          style={styles.image}
        />
        <Image
          source={require("../assets/youtube.png")}
          alt="logo"
          style={styles.image}
        />
        <Image
          source={require("../assets/spotify.png")}
          alt="logo"
          style={styles.image}
        />
        <Image
          source={require("../assets/website.png")}
          alt="logo"
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default ListScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "700",
  },
  imageContainer: {
    gap: 10,
    flexDirection: "row",
  },
  image: {
    height: 20,
    width: 22,
  },
});
