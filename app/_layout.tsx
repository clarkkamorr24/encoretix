import { Stack } from "expo-router";
import QueryProvider from "../providers/QueryProviders";

const RootLayout = () => {
  return (
    <QueryProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="lists/[id]" options={{ headerShown: false }} />
      </Stack>
    </QueryProvider>
  );
};

export default RootLayout;
