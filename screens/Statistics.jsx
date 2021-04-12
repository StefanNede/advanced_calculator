import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from "../global/dimensions";
import StatsKeyboard from "../components/StatsKeyboard";
import StatsView from "../components/StatsView";

export default function Statistics({navigation}){
    const del = "<=";
    const [numbers, setNumbers] = useState([]);
    const [number, setNumber] = useState("");
    const addToSet = () =>{
        if (number !== ""){
            setNumbers([...numbers, number]);
            setNumber("");
        }
    }
    return(
        <View>
            <View style={styles.container}>
                <StatsView numbers={numbers} setNumbers = {setNumbers} number={number} setNumber={setNumber} />
                <TouchableOpacity onPress={()=> navigation.navigate('options', {
            numbers: numbers,
          })} style={styles.next}>
                    <Text style={{fontSize:20}}>next</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.del} onPress={() => setNumber(number.slice(0,-1))}>
                    <Text style={{fontSize:25}}>{del}</Text>
                </TouchableOpacity> 
            </View>
            <View style={{width: windowWidth, borderTopWidth: 1}}>
                <TouchableOpacity onPress={() => addToSet()} style={styles.add}>
                    <Text>add</Text>
                </TouchableOpacity> 
                <View style={styles.keyboardContainer}>
                    <StatsKeyboard number={number} setNumber={setNumber} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight*0.4,
        width: windowWidth,
    },
    add:{
        marginTop: windowHeight*0.045,
        position: 'absolute',
        width: windowWidth*0.15,
        marginLeft: windowWidth*0.775,
        height: windowHeight*0.4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'lightgray',
        borderRadius: 50,
    },
    keyboardContainer:{
        marginLeft: windowWidth*0.05,
        width: windowWidth*0.65,
        height: windowHeight*0.4,
        marginTop: windowHeight*0.05,
    },
    del: {
        position: 'absolute',
        right: 40,
        bottom: 15,
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 100
    },
    next: {
        bottom: 10,
        left: 10
    }
})