import { COLORS } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  bgColor: {
    backgroundColor: COLORS.primary,
  },
  justifyScreen: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: COLORS.primary,
    paddingTop: 20,
    marginHorizontal: 20,
  },
  mainText: {
    color: COLORS.secondary,
  },
  contain: {
    margin: 15,
  },
  h1: {
    textAlign: "center",
    fontSize: 28,
    color: "white",
    fontFamily: "ChakraPetchBold",
  },
  h2: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontFamily: "ChakraPetchRegular",
  },
  textPoint: {
    textAlign: "left",
    fontSize: 18,
    fontFamily: "ChakraPetchBold",
    color: COLORS.active,
    marginRight: 5,
    fontWeight: "bold",
    marginVertical: 3,
  },
  subTextPoint: {
    textAlign: "left",
    fontSize: 16,
    fontFamily: "ChakraPetchRegular",
    color: "white",
  },
  input: {
    width: "100%",
    marginBottom: 4,
    marginTop: 4,
    backgroundColor: COLORS.input.primary,
  },
  loading: {
    height: "100%",
    width: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    zIndex: 9999,
    opacity: 0.8,
  },
  textLoading: {
    color: COLORS.active,
    textAlign: "center",
  },
  whiteText: {
    color: "white",
  },
  titleCard: {
    color: "white",
    fontFamily: "ChakraPetchBold",
  },
  subTitleCard: {
    color: "white",
    fontFamily: "ChakraPetchRegular",
  },
  contentCardList: {
    width: "100%",
    backgroundColor: COLORS.secondary,
    margin: 5,
    borderRadius: 10,
  },
  cardListInteres: {
    width: "100%",
    backgroundColor: COLORS.secondary,
    marginVertical: 5,
  },
  contentTextCardListInteres: {
    backgroundColor: COLORS.primary,
    height: 40,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
