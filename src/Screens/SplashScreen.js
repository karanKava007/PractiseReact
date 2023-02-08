import { View, Text, StyleSheet, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function SplashScreen() {
    return (
        //LinearGradient Part
        <LinearGradient colors={['#ACBDFA', '#194AF9']} style={styles.container}>
            {/* Logo Section */}
            <View>
            <Image source={require('../Images/logo.png')} />
            </View>
            {/* Button Section */}
            <View>
                <TouchableOpacity>
                    <Text>Click</Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})