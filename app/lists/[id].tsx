import { useLocalSearchParams } from "expo-router";
import { FlatList, Image, StyleSheet, View } from "react-native";
import AppLayout from "../../components/AppLayout";
import ListScreenHeader from "../../components/ListScreenHeader";
import ListScreenItems from "../../components/ListScreenItems";
import { useAttraction } from "../../api/attractions";

const data = [
  {
    id: 1,
    name: "BIG EYED PISH",
  },
  {
    id: 2,
    name: "PHISH CONCERT FILM",
  },
  {
    id: 3,
    name: "THE LIZARDS - PLAY PHISH",
  },
  {
    id: 4,
    name: "A LIVE ONE - PHISH TRIBUTE",
  },
  {
    id: 5,
    name: "A LIVE ONE - PHISH TRIBUTE",
  },
  {
    id: 6,
    name: "A LIVE ONE - PHISH TRIBUTE",
  },
  {
    id: 7,
    name: "A LIVE ONE - PHISH TRIBUTE",
  },
];

const List = () => {
  const { id } = useLocalSearchParams();
  const stringId: string = (id as string) || "";
  const { data: product, error, isLoading } = useAttraction(stringId);

  return (
    <AppLayout>
      <Image
        source={{ uri: product?.images[0].url }}
        alt="logo"
        style={styles.background}
      />
      <View style={styles.container}>
        <ListScreenHeader name={product?.name} />
        <View style={{ marginBottom: 20 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatlistStyle}
            keyExtractor={(item, index) => index.toString()}
            data={data}
            renderItem={(item) => <ListScreenItems item={item.item} />}
          />
        </View>
      </View>
    </AppLayout>
  );
};
export default List;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 245,
  },
  container: {
    gap: 20,
    padding: 20,
  },
  flatlistStyle: {
    gap: 24,
    flexDirection: "column",
    width: "100%",
  },
});
