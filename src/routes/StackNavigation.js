import React from 'react'
import productMain from '../practise/ProductMain';
import ProductDetail from '../practise/ProductDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtpReg from '../Screens/OtpReg';
import OtpVerification from '../Screens/OtpVerification';
import { Alert, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const ProductStack = () => {
    return (
        <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
        >
            <Stack.Screen name="productMain" component={productMain}/>
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
    )
}
export { ProductStack };