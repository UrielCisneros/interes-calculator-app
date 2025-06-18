import { COLORS } from "@/constants/Colors";
import { FAVORITE_DATA_STORAGE } from "@/constants/DataStorage";
import { DataCalculate } from "@/helpers/interfaces";
import { getItemList, removeItemList, setDataOneMore } from "@/helpers/storeDataList";
import { globalStyles } from "@/styles/global-styles";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";

interface Props {
  item: DataCalculate;
}

const CustomCard = ({ item }: Props) => {
  const navigationRouter = useRouter();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);

  const onPress = (id: string) => {
    navigationRouter.push(`/${id}`);
  };

  const addToFavorite = async () => {
    try {
      const itemFavorite = await getItemList(item.id, FAVORITE_DATA_STORAGE);
      if (itemFavorite === undefined) {
        await setDataOneMore(item, FAVORITE_DATA_STORAGE);
        return setIsFavorite(true);
      }else {
        const removeFavorite = await removeItemList(item.id,FAVORITE_DATA_STORAGE);
        if(removeFavorite) setReload(e => !e);
      }
    } catch (error) {
      return setIsFavorite(false);
    }
  };

  useEffect(() => {
    const getDataFavorite = async () => {
      const itemFavorite = await getItemList(item.id, FAVORITE_DATA_STORAGE);
      if (itemFavorite === undefined)
        setIsFavorite(false);
      else setIsFavorite(true);
    };
    getDataFavorite();
  }, [item, reload]);

  return (
    <Pressable onPress={() => onPress(item.id)}>
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
          <IconButton
            {...props}
            icon="heart"
            iconColor={isFavorite ? COLORS.active : undefined}
            onPress={() => addToFavorite()}
          />
        )}
      />
    </Pressable>
  );
};

export default CustomCard;
