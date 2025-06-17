import { ListDataInterest } from "@/helpers/interfaces";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Card, Text } from "react-native-paper";
import CustomText from "./CustomText";

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

interface Props extends PropsText {
  item: ListDataInterest;
}

interface PropsText {
  index: number;
}

const CustomCardListInteret = ({ item, index }: Props) => {
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
            subTitle={`$${item.total_gains}`}
            styleContent={styleContentText}
          />
        }
        subtitle={
          <CustomText
            title="Ganancia del año:"
            subTitle={`$${item.gain_for_year.toFixed(2)}`}
            styleContent={styleContentText}
          />
        }
        left={() => <TextFloat index={item.current_year} />}
      />
      <Card.Content>
        <CustomText
          title="Ganancia sin año actual"
          subTitle={`$${item.gain_without_berore_gain}`}
          styleContent={styleContentText}
        />
        <CustomText
          title="Ganancia por mes:"
          subTitle={`$${item.mouth_gain}`}
          styleContent={styleContentText}
        />
      </Card.Content>
    </Card>
  );
};

const TextFloat = ({ index }: PropsText) => {
  return (
    <View style={globalStyles.contentTextCardListInteres}>
      <Text
        style={{
          fontFamily: "ChakraPetchBold",
          fontSize: 18,
          color: "white",
        }}
      >
        {index}
      </Text>
    </View>
  );
};

export default CustomCardListInteret;
