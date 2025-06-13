import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const ViewListInterest = () => {
    const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>ViewListInterest</Text>
    </View>
  )
}

export default ViewListInterest