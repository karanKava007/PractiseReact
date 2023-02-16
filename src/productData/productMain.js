import { View, Text, Button } from 'react-native'
import React from 'react'

export default function productMain( {navigation} ) {
  return (
    <View>
      <Text>productMain</Text>
      <Button
        title="Go to productDetails"
        onPress={() => navigation.navigate('productDetail')}
      />
    </View>
  )
}