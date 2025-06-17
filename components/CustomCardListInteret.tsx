import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Card, Text } from "react-native-paper";
import CustomText from "./CustomText";

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CustomCardListInteret = () => {
  const styleContentText: StyleProp<ViewStyle> = {
    justifyContent: "space-between",
  };

  return (
    <Card style={globalStyles.cardListInteres}>
      <Card.Title
        titleStyle={[globalStyles.whiteText]}
        subtitleStyle={[globalStyles.whiteText]}
        title={
          <CustomText
            title="Ganancia Total:"
            subTitle="$20,000"
            styleContent={styleContentText}
            
          />
        }
        subtitle={
          <CustomText
            title="Ganancia del año:"
            subTitle="$10,000"
            styleContent={styleContentText}
          />
        }
        left={() => <TextFloat />}
      />
      <Card.Content>
        <CustomText
          title="Ganancia sin año actual"
          subTitle="$9,000"
          styleContent={styleContentText}
        />
        <CustomText
          title="Ganancia por mes:"
          subTitle="$3,000"
          styleContent={styleContentText}
        />
      </Card.Content>
    </Card>
  );
};

const TextFloat = () => {
  return (
    <View style={globalStyles.contentTextCardListInteres}>
      <Text
        style={{
          fontFamily: "ChakraPetchBold",
          fontSize: 18,
          color: "white",
        }}
      >
        1
      </Text>
    </View>
  );
};

export default CustomCardListInteret;
