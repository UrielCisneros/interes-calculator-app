// import { AnimatedContentScroll } from "@/components/AnimatedScroll";
import CustomCardListInteret from "@/components/CustomCardListInteret";
import CustomText from "@/components/CustomText";
import { DataCalculate } from "@/helpers/interfaces";
import { getItemList } from "@/helpers/storeDataList";
import { globalStyles } from "@/styles/global-styles";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { AnimatedContentScroll } from "react-native-animated-content-scroll";

const ViewListInterest = () => {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState<DataCalculate>();

  const getDataForId = async () => {
    const productId = Array.isArray(id) ? id[0] : id;
    const data = await getItemList(productId);
    setData(data);
    console.log({ id, data });
  };

  useEffect(() => {
    getDataForId();
  }, [id]);

  return (
    <SafeAreaView style={globalStyles.bgColor}>
      <View style={[globalStyles.bgColor, globalStyles.justifyScreen]}>
        <View style={{ marginBottom: 20 }}>
          <CustomText
            title="Inversion inicial"
            subTitle={`$${data?.savings_now}`}
          />
          <CustomText title="Años de inversion" subTitle={`${data?.years}`} />
          {/* <CustomText title="Ahorro por año" subTitle={`$${data?.savings}`} /> */}
          <CustomText title="Ganancia neta" subTitle={`$${data?.total_gain}`} />
          <CustomText title="Interes anual" subTitle={`${data?.interest}%`} />
        </View>
        <FlatList
          data={data?.calculate_years}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <AnimatedContentScroll
              direction="bottom"
              duration={500}
              distance={100}
              index={index}
              key={item.id}
            >
              <CustomCardListInteret item={item} index={index} />
            </AnimatedContentScroll>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewListInterest;
