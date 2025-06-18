import { COLORS } from "@/constants/Colors";
import { DataCalculate } from "@/helpers/interfaces";
import { globalStyles } from "@/styles/global-styles";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";

interface Props {
  item: DataCalculate;
}

const CustomCard = ({ item }: Props) => {

  const navigationRouter = useRouter();


  const onPress = (id: string) => {
    navigationRouter.push(`/${id}`);
  }


  return (
    <Pressable
      onPress={() => onPress(item.id)}
    >
      <Card.Title
        style={globalStyles.contentCardList}
        title={`Invercion: $${item.savings_now} | Gains: $${item.total_gain}`}
        titleStyle={globalStyles.titleCard}
        subtitleStyle={globalStyles.subTitleCard}
        subtitle={`Total: $${item.savings} a ${item.years} años`}
        left={(props) => (
          <Avatar.Icon
            // color={COLORS.active}
            style={{
              backgroundColor: COLORS.primary,
            }}
            {...props}
            icon="folder"
          />
        )}
        right={(props) => (
          <IconButton {...props} icon="heart" iconColor={undefined}  onPress={() => {}} />
        )}
        
      />
    </Pressable>
  );
};

export default CustomCard;
