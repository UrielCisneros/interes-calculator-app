import { COLORS } from "@/constants/Colors";
import {
  FAVORITE_DATA_STORAGE,
  NAME_DATA_STORAGE,
} from "@/constants/DataStorage";
import { initialData } from "@/helpers/storeDataList";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ChakraPetchBold: require("../assets/fonts/ChakraPetch-Bold.ttf"),
    ChakraPetchRegular: require("../assets/fonts/ChakraPetch-Regular.ttf"),
  });

  useEffect(() => {
    initialData(NAME_DATA_STORAGE);
    // removeDataOfStorage(NAME_DATA_STORAGE);
    // removeDataOfStorage(FAVORITE_DATA_STORAGE);
  }, []);

  useEffect(() => {
    initialData(FAVORITE_DATA_STORAGE);
  }, []);

  if (!loaded && !error) return null;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="[id]"
          options={{
            presentation: "modal", // o 'card' si quieres transición normal
            title: "Detalle del producto",
            headerTitleStyle: { color: "white", fontFamily: "ChakraPetchBold" },
            headerStyle: { backgroundColor: COLORS.secondary },

            // headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
