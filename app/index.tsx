import { FlatList, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import ETButton from "../components/ETButton";
import NoResult from "../components/NoResult";
import List from "../components/List";
import AppLayout from "../components/AppLayout";
import Spinner from "../components/Spinner";
import { useAttractionList } from "../api/attractions";
import { ET_X_LIGHT_BLUE, STATUS_BAR_HEIGHT } from "../lib/constant";

export default function HomePage() {
  const [initialData, setInitialData] = useState("");
  const {
    data: attractions,
    error,
    isLoading,
  } = useAttractionList(initialData);

  const [text, setText] = useState("");

  const handleSearch = (e: string) => {
    setText(e);
  };

  const handleSubmit = async () => {
    setInitialData(text);
  };

  useEffect(() => {
    if (text === "") {
      setInitialData("");
    }
  }, [text]);

  return (
    <AppLayout>
      <View style={styles.container}>
        <View style={styles.searchContent}>
          <Searchbar handleSearch={handleSearch} />
          <ETButton title="Submit" handleSubmit={handleSubmit} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatlistStyle}
            keyExtractor={(item, index) => index.toString()}
            data={attractions?._embedded?.attractions}
            renderItem={(item) => <List item={item.item} />}
            ListEmptyComponent={() => (isLoading ? <Spinner /> : <NoResult />)}
          />
        </View>

        {/* <NoResult /> */}
      </View>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: STATUS_BAR_HEIGHT,
    flex: 1,
  },
  container: {
    backgroundColor: ET_X_LIGHT_BLUE,
    paddingHorizontal: 20,
    flex: 1,
  },
  searchContent: {
    flexDirection: "row",
    paddingTop: 20,
    gap: 5,
    marginBottom: 20,
  },
  flatlistStyle: {
    gap: 24,
    flexDirection: "column",
    width: "100%",
  },
});
