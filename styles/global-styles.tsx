import { COLORS } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  bgColor: {
    backgroundColor: COLORS.primary,
  },
  justifyScreen: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: COLORS.primary,
  },
  mainText: {
    color: COLORS.secondary,
  },
  contain: {
    height: "50%",
    width: "90%",
  },
  h1: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    margin: 10,
  },
  input: {
    width: "100%",
    marginBottom: 4,
    marginTop: 4,
    backgroundColor: COLORS.input.primary
  },
});
