import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {windowWidth, windowHeight} from "../global/dimensions";

export default function StatsView(props){
    return (
        <View style={styles.container}>
            <Text>hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight*0.4, 
        flex:1 
    }
})