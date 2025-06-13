import CustomCard from "@/components/CustomCard";
import CustomLoader from "@/components/CustomLoader";
import { DataCalculate } from "@/helpers/interfaces";
import { getData } from "@/helpers/storeDataList";
import { globalStyles } from "@/styles/global-styles";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

const HistoryScreen = () => {
  const [loading, setLoading] = useState(false);
  const [dataList, setdataList] = useState([]);

  useEffect(() => {
    setLoading(true);
    getList();
    return () => setdataList([]);
  }, []);

  const getList = async () => {
    const data: any = await getData();
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
        <View
          style={{
            margin: 10,
          }}
        >
          {dataList.map((item: DataCalculate) => (
            <CustomCard key={item.id} item={item} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HistoryScreen;
