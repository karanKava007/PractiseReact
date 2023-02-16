import React from 'react'
import productMain from '../productData/productMain';
import productDetail from '../productData/productDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtpReg from '../Screens/OtpReg';
import OtpVerification from '../Screens/OtpVerification';

const Stack = createNativeStackNavigator();

const ProductStack = () => {
    return (
        <Stack.Navigator
            >
            {/* <Stack.Screen name="productMain" component={productMain} />
            <Stack.Screen name="productDetail" component={productDetail} /> */}
            <Stack.Screen name="otpVarification" component={OtpVerification} 
            options={{ headerShown: false }}
            
            />
            <Stack.Screen name="otpReg" component={OtpReg} options={{ 
                title: null,
                statusBarColor:'blue',
            }} />

        </Stack.Navigator>
    )
}
export { ProductStack };