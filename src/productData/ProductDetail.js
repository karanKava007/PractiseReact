import { View, Text, Button } from 'react-native'
import React from 'react'

export default function ProductDetail({route , navigation}) {
    const { itemId, name } = route.params;
    return (
    <View>
      <Text>Product Id {itemId}</Text>
      <Text>Product Name {name}</Text>
      <Button title='GO BACK' onPress={()=>{}}/>
    </View>
  )
}