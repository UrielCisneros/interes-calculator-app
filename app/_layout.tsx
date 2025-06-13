import { initialData } from "@/helpers/storeDataList";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ChakraPetchBold: require("../assets/fonts/ChakraPetch-Bold.ttf"),
    ChakraPetchRegular: require("../assets/fonts/ChakraPetch-Regular.ttf"),
  });

  useEffect(() => {
    initialData();
    // removeDataOfStorage()
  }, []);

  if (!loaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
