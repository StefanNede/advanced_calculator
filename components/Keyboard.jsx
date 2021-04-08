import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "../global/dimensions";

export default function Keyboard({ keys, setCalculation, calculation, previousResult, setPreviousResult }) {
    const handleCalculation = () => {
        setPreviousResult(calculation);
        setCalculation("");
    }
    const handlePress = (buttonPressed) =>{
        switch(buttonPressed){
            case "AC":
                setCalculation("");
                break;
            case "=":
                handleCalculation();
                break;
            default:
                setCalculation(calculation + buttonPressed);
                break;
        }
    };
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            {keys.map((keyrow, index) => {
                return (
                    <View key={index} style={{ flex: 1, flexDirection: 'row', width: windowWidth, justifyContent: 'space-evenly' }}>
                        <TouchableOpacity style={keyrow[0] === 'AC' ? [styles.numberButton, styles.operatorButtons] : styles.numberButton} onPress={()=>handlePress(keyrow[0])} >
                            <Text style={{ fontSize: 20 }}>{keyrow[0]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={keyrow[1] === '()' ? [styles.numberButton, styles.operatorButtons] : styles.numberButton} onPress={()=>handlePress(keyrow[1])}>
                            <Text style={{ fontSize: 20 }}>{keyrow[1]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={keyrow[2] === '%' ? [styles.numberButton, styles.operatorButtons] : styles.numberButton} onPress={()=>handlePress(keyrow[2])}>
                            <Text style={{ fontSize: 20 }}>{keyrow[2]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.numberButton, styles.operatorButtons]} onPress={()=>handlePress(keyrow[3])}>
                            <Text style={{ fontSize: 20 }}>{keyrow[3]}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    numberButton: {
        backgroundColor: 'lightgray',
        padding: 5,
        height: windowHeight * 0.075,
        width: windowHeight * 0.075,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    operatorButtons: {
        backgroundColor: 'orange',
    }
})