import { COLORS } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

const _layout = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <Tabs
        screenOptions={{
          headerStyle: globalStyles.bgColor,
          tabBarStyle: globalStyles.bgColor,
          tabBarActiveTintColor: COLORS.active,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="home/index"
          options={{
            title: "Casas",

            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="history/index"
          options={{
            title: "Historial",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="book" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorite/index"
          options={{
            title: "Mis favoritas",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="heart" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default _layout;
