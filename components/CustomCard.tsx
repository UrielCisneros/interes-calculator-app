import { COLORS } from "@/constants/Colors";
import { DataCalculate } from "@/helpers/interfaces";
import React from "react";
import { Avatar, Card, IconButton } from "react-native-paper";

interface Props {
  item: DataCalculate;
}

const CustomCard = ({ item }: Props) => {
  return (
    <Card.Title
      style={{
        width: "100%",
        backgroundColor: COLORS.secondary,
        margin:5,
        borderRadius: 10,
      }}
      title={`Invercion: $${item.savings_now} | Gains: $${item.total_gain}`}
      titleStyle={{
        color: "white",
        fontFamily: 'ChakraPetchBold'
      }}
      subtitleStyle={{
        color: "white",
        fontFamily: 'ChakraPetchRegular'
      }}
      subtitle={`Total: $${item.savings} a ${item.years} años`}
      left={(props) => <Avatar.Icon color={COLORS.active} style={{
        backgroundColor: COLORS.input.primary
      }} {...props} icon="folder" />}
      right={(props) => (
        <IconButton {...props} icon="heart" onPress={() => {}} />
      )}
    />
  );
};

export default CustomCard;
