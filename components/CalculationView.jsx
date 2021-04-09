// shows the previous result and the current calculation
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {windowHeight, windowWidth} from "../global/dimensions";

export default function CalculationView(props){
    const getPrevious = () =>{
        // puts the previous result in the current calculation
        props.setCalculation(props.calculation + props.previousResult);
    }
    return (
        <View style={{flex:1, borderColor: 'darkgray', borderBottomWidth: 2}}>
            <View style={styles.previous}>
                <TouchableOpacity onPress={getPrevious} style={{backgroundColor:'lightgray', paddingHorizontal:30, paddingVertical:5}}>
                    <Text>{props.previousResult}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.current}>
                <Text style={{fontSize: 30}}>{props.calculation}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    previous: {
        height: '20%',
        flex: 1,
        justifyContent:'flex-start',
        marginTop: '8%',
        marginRight: '10%',
        alignItems:'flex-end',
    },
    current: {
        height: '80%',
        flex:1,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginBottom: '8%',
        marginRight: '10%',
    },
})