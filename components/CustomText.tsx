import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";

interface Props {
  title: string;
  subTitle: string;
  styleContent?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<ViewStyle |  TextStyle>;
  styleSubTitle?: StyleProp<ViewStyle>;
}

const CustomText = ({
  title,
  subTitle,
  styleContent = { justifyContent: "space-between" },
  styleTitle = {},
  styleSubTitle = {},
}: Props) => {
  return (
    <View
      style={[
        { width: "100%", display: "flex", flexDirection: "row" },
        styleContent,
      ]}
    >
      <Text style={[globalStyles.textPoint]}>{title}:</Text>
      <Text style={[globalStyles.subTextPoint]}>{subTitle}</Text>
    </View>
  );
};

export default CustomText;
