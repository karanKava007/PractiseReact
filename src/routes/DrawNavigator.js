import home from '../practise/Home';
import About from '../practise/About';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ProductStack } from './StackNavigation';


const Tab = createBottomTabNavigator();

const TabNavigatorStack = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'About') {
                        iconName = focused ? 'ios-list' : 'ios-list-outline';
                    } else if (route.name === 'ProductStack') {
                        iconName = focused
                            ? 'at-circle'
                            : 'at-circle-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'purple',
                tabBarInactiveTintColor: '#ccc',
            })}
        >
            <Tab.Screen name="Home" component={home} />
            <Tab.Screen name="ProductStack" component={ProductStack} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    )
}
export { TabNavigatorStack };