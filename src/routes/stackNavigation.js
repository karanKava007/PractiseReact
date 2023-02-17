import React from 'react'
import productMain from '../productData/ProductMain';
import ProductDetail from '../productData/ProductDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtpReg from '../Screens/OtpReg';
import OtpVerification from '../Screens/OtpVerification';
import { Alert, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const ProductStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="productMain" component={productMain} options={{
                //   headerTitle: (props) => <LogoTitle {...props} />,
                headerRight: ({}) => (
                    <Button
                        onPress={() => navigation.navigate('ProductDetail') }
                        title="Info"
                        color="#000"
                    />
                ),
            }} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            {/* <Stack.Screen name="otpVarification" component={OtpVerification} 
            options={{ headerShown: false }}
            
            />
            <Stack.Screen name="otpReg" component={OtpReg} options={{ 
                title: null,
                statusBarColor:'blue',
            }} /> */}


        </Stack.Navigator>
    )
}
export { ProductStack };