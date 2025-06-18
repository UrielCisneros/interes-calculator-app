// import { AnimatedContentScroll } from "@/components/AnimatedScroll";
import CustomCard from "@/components/CustomCard";
import CustomLoader from "@/components/CustomLoader";
import { NAME_DATA_STORAGE } from "@/constants/DataStorage";
import { DataCalculate } from "@/helpers/interfaces";
import { getData } from "@/helpers/storeDataList";
import { globalStyles } from "@/styles/global-styles";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { AnimatedContentScroll } from 'react-native-animated-content-scroll';

export interface PropsListItem {
  index: number;
  item: DataCalculate;
}

const HistoryScreen = () => {
  const [loading, setLoading] = useState(false);
  const [dataList, setdataList] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    // setLoading(true);
    getList();
  }, [isFocused]);

  const getList = async () => {
    const data: any = await getData(NAME_DATA_STORAGE);
    if (!data) return setdataList([]);
    setTimeout(() => {
      setdataList(data);
      setLoading(false);
    }, 500);
  };

  return (
    <SafeAreaView style={globalStyles.bgColor}>
      <View style={[globalStyles.bgColor, globalStyles.justifyScreen]}>
        <CustomLoader loading={loading} />
        <Text style={globalStyles.h1}>Historial</Text>
        <View style={{ margin: 10 }}>
          <FlatList
            data={dataList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }: PropsListItem) => (
              <AnimatedContentScroll
                duration={500}
                distance={100}
                index={index}
                key={item.id}
              >
                <CustomCard key={item.id} item={item} />
              </AnimatedContentScroll>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HistoryScreen;
