import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function OtpReg() {
    return (
        <View style={styles.fullFlex}>
            <View style={styles.Content}>
                <Text style={styles.otpHeader}>OTP verification</Text>
                <Text style={styles.info}>Enter the verification code we just send on phone number</Text>
                <View style={styles.OtpSection}>
                    <TextInput style={styles.textInput} />
                    <TextInput style={styles.textInput} />
                    <TextInput style={styles.textInput} />
                    <TextInput style={styles.textInput} />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Blank}>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Content: {
        flex: 4,
        backgroundColor: null,
        padding: 10,
    },
    Blank: {
        flex: 2,
        backgroundColor: null,
    },
    fullFlex: {
        flex: 1,
    },
    OtpSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:30,
    },
    textInput: {
        textAlign:'center',
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        height: 70,
        width: 70,
        marginHorizontal: 8,
        marginVertical: 20,
        borderRadius: 10,
        fontSize:25,
        fontFamily:'Poppins-Medium',
    },
    otpHeader: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        marginTop:90,
        fontWeight:600,
    },
    info: {
        fontSize: 16,
        color: '#777',
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        marginVertical:25,
        fontWeight:400,
    },
    button:{
        backgroundColor:'blue',
        borderRadius:30,
       paddingHorizontal:10,
       paddingVertical:12   ,
       marginVertical:30,
       marginHorizontal:20,
    },
    buttonText:{
        color:'white',
        fontSize:25,
        textAlign:'center'
    },
    
})