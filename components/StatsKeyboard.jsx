import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from "../global/dimensions";

export default function StatsKeyboard({number, setNumber}){
    const addNum = (digit) =>{
        setNumber(number + digit);
    }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => addNum("7")}>
                    <Text style={{fontSize:20}}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button} onPress={() => addNum("8")}>
                    <Text style={{fontSize:20}}>8</Text> 
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button} onPress={() => addNum("9")}>
                    <Text style={{fontSize:20}}>9</Text> 
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity  style={styles.button} onPress={() => addNum("4")}>
                    <Text style={{fontSize:20}}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button} onPress={() => addNum("5")}>
                    <Text style={{fontSize:20}}>5</Text> 
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button} onPress={() => addNum("6")}>
                    <Text style={{fontSize:20}}>6</Text> 
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity  style={styles.button} onPress={() => addNum("1")}>
                    <Text style={{fontSize:20}}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button} onPress={() => addNum("2")}>
                    <Text style={{fontSize:20}}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addNum("3")}>
                    <Text style={{fontSize:20}}>3</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
    },
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    button :{
        width: windowWidth*0.175,
        height: windowWidth*0.175,
        borderRadius: 100,
        backgroundColor: 'lightgray',
        alignItems: "center",
        justifyContent: "center"
    }
})