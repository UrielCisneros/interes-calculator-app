import { AnimatedContentScroll } from '@/components/AnimatedScroll'
import CustomCard from '@/components/CustomCard'
import CustomLoader from '@/components/CustomLoader'
import { getData } from '@/helpers/storeDataList'
import { globalStyles } from '@/styles/global-styles'
import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { PropsListItem } from '../history'

const FavoriteScreen = () => {
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
        <Text style={globalStyles.h1}>Favoritos</Text>
        <View
          style={{
            margin: 10,
          }}
        >
          <FlatList
            data={dataList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }: PropsListItem) => (
              <AnimatedContentScroll index={index} key={item.id}>
                <CustomCard key={item.id} item={item} />
              </AnimatedContentScroll>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default FavoriteScreen