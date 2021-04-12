import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { windowWidth, windowHeight } from "../global/dimensions";

export default function Keyboard({ keys, setCalculation, calculation, previousResult, setPreviousResult }) {
    const countOccurences = (str, target) =>{
        let count = 0;
        for(let letter of str){
            if (letter === target){
                count++;
            }
        }
        return count;
    }
    const handleCalculation = () => {
        // the parts of the calculation: 2+2 -> [2,+,2]
        const parts = calculation.split("");
        let argument1, argument2, result;
        if (calculation[0]==="-" && countOccurences(calculation, "-")===1 && countOccurences(calculation, "+")===0 && countOccurences(calculation, "÷")===0 && countOccurences(calculation, "x")===0){
            setPreviousResult(calculation);  
        }
        else if (countOccurences(calculation, "-")===0 && countOccurences(calculation, "+")===0 && countOccurences(calculation, "÷")===0 && countOccurences(calculation, "x")===0){
            setPreviousResult(calculation);   
        }
        else {
            for (let i=0;i<parts.length;i++){
                if (parts[i]=== "+" || parts[i]=== "-" || parts[i]=== "x" || parts[i]=== "÷"){
                    argument1 = parseFloat(parts.slice(0, i).join(""));
                    argument2 = parseFloat(parts.slice(i+1).join(""));
                    switch (parts[i]){
                        case "+":
                            result = argument1 + argument2;
                            break;
                        case "-":
                            result = argument1 - argument2;
                            break
                        case "x":
                            result = argument1 * argument2;
                            break
                        case "÷":
                            result = argument1 / argument2;
                            break
                    }
                }
            }
            setPreviousResult(result); 
        }
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
            case "+|-":
                if (calculation[0] === "-"){
                    setCalculation(calculation.slice(1));
                } else {
                    setCalculation(`-${calculation}`);
                }
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
        height: windowHeight * 0.1,
        width: windowHeight * 0.1,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                height: windowHeight * 0.08,
                width: windowHeight * 0.08,
            },
            android: {
                height: windowHeight * 0.1,
                width: windowHeight * 0.1,
            }
          })
    },
    operatorButtons: {
        backgroundColor: 'orange',
    }
})