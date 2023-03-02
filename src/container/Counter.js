import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/action/Counter.action';

const Counter = () => {
    const dispatch = useDispatch();
    const counterData = useSelector(state => state.counterDigit);
    return (
        <View style={{backgroundColor:'#000' , flex:1,justifyContent:'center'}}>
            <Button title='+' onPress={() => {
                dispatch(increment())
            }} />
            <Text
                style={{ textAlign: 'center', fontSize: 100, color:'#fff' }}>
                {counterData.count}
            </Text>
            <Button title='-' onPress={() => {
                dispatch(decrement())
            }} />
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({})