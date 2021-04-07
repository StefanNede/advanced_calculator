import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CalculationView from "../components/CalculationView";
import {windowWidth} from "../global/dimensions";


export default function Basic(){
    const numbers = [1,2,3,4,5,6,7,8,9];
    const operators = ['+', '-', 'x', '÷'];
    return(
        <View style={{flex:1, alignItems:"center"}}>
            <View>
                <CalculationView />
            </View>
            <View style={styles.buttonContainer}>
                {/* we can map over the numbers and return toouchable opacities */}
                {numbers.map((number, index) => {
                    return (
                    <TouchableOpacity style={styles.numberButton} key={index}>
                        <Text>{number}</Text>
                    </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    numberButton: {
        backgroundColor: 'lightgray',
        padding: 5,
        height: 30,
        width: 30,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        width: windowWidth,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    }
})