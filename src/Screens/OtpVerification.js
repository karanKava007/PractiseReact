import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function OtpVerification() {
    //<Text><MaterialIcons name='home' size={50}/></Text>
    return (
        <View style={styles.mainContainer}>
            <View style={styles.MainInfo}>
                <Text style={styles.Headtext}>Join Us Via Phone Number</Text>
                {/* Inout Arrow And Contry Flag Section */}
                <View style={styles.row}>
                    <Image
                    style={styles.imgHeigth}
                        source={require('../Images/india.png')}
                    />
                    <Text style={styles.iconTwo}><MaterialIcons name='arrow-drop-down' size={30} /></Text>
                    <TextInput style={styles.input} placeholder='Enter Number' />
                </View>
                <View style={styles.buttonSection}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.blankBoard}></View>
            <View style={styles.privecyLink}>
                <Text style={styles.bottomText}>By tapping “Next” you agree to Terms and Conditions
                    and Privacy Policy</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    Headtext: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        fontWeight: 600,
        marginTop: 50,
    },
    MainInfo: {
        flex: 2,
        backgroundColor: null,
        paddingVertical: 30,
    },
    blankBoard: {
        flex: 1,
        backgroundColor: null,
    },
    privecyLink: {
        flex: 1,
        backgroundColor: null,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    bottomText: {
        textAlign: 'center',
        color: '#777',
        marginBottom: 30,
        fontSize: 12,
    },
    input: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        flex: 5,
    },
    row: {
        flexDirection: 'row',
        marginVertical: 30,
        backgroundColor: null,
        marginHorizontal: 20,
        alignItems: 'center',
        flex: 3,
    },
    buttonSection: {

    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 100,
        marginHorizontal: 25,
        marginVertical: 20,
        paddingVertical: 10,
        fontFamily: 'Poppins-Medium',
        fontWeight: 600,
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center'
    },
    imgHeigth:{
        width:40,
        height:55,
        borderRadius:100,
        alignSelf:'center'
    }
})