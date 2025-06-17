import CustomCardListInteret from '@/components/CustomCardListInteret';
import CustomText from '@/components/CustomText';
import { globalStyles } from '@/styles/global-styles';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

const ViewListInterest = () => {
    const { id } = useLocalSearchParams();

    console.log(id)
  return (
    <SafeAreaView style={globalStyles.bgColor}>
      <View style={[globalStyles.bgColor, globalStyles.justifyScreen]}>
        <ScrollView>

        <Text style={globalStyles.h1} >Detalle</Text>
        <View style={{marginBottom: 20}}>
          <CustomText title='Inversion inicial' subTitle='$10,000' />
          <CustomText title='Años de inversion' subTitle='5' />
          <CustomText title='Ahorro por año' subTitle='$10,000' />
          <CustomText title='Interes anual' subTitle='0.09%' />
          <CustomText title='Ganancia neta' subTitle='$5,000' />
          <CustomText title='Interes anual' subTitle='0.09%' />
        </View>

        <CustomCardListInteret />
        <CustomCardListInteret /> 
        <CustomCardListInteret />
        <CustomCardListInteret />
        <CustomCardListInteret />
        <CustomCardListInteret />
        <CustomCardListInteret />
        <CustomCardListInteret />
        <CustomCardListInteret />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ViewListInterest