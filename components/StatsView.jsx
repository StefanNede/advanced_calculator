import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {windowWidth, windowHeight} from "../global/dimensions";

export default function StatsView({numbers, setNumbers, number, setNumber}){
    return (
        <View style={styles.container}>
            <View>
                <CurrentSet numbers={numbers} />
            </View>
            <View>
                <CurrentNumber number={number} />
            </View>
        </View>
    )
}

function CurrentSet({numbers}){
    return (
        <View style={styles.currentSet}>
            <Text style={{fontSize:30}}>{numbers.join(",")}</Text>
        </View>
    )
}

function CurrentNumber({number}){
    return (
        <View style={styles.currentNumber}>
            <Text style={{fontSize: 25}}>{number}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight*0.4, 
        flex:1,
    },
    currentNumber: {
        height: '50%'
    },
    currentSet: {
        height: '50%'
    }
})