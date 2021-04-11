import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from "../global/dimensions";
import StatsKeyboard from "../components/StatsKeyboard";
import StatsView from "../components/StatsView";

export default function Statistics({navigation}){
    const [numbers, setNumbers] = useState([]);
    return(
        <View>
            <View style={styles.container}>
                <StatsView numbers={numbers} setNumbers = {setNumbers} />
            </View>
            <View style={{width: windowWidth, flex:1, borderTopWidth: 1}}>
                <TouchableOpacity onPress={()=> navigation.navigate('options')} style={styles.moveOn}>
                    <Text>submit</Text>
                </TouchableOpacity> 
                <View style={styles.keyboardContainer}>
                    <StatsKeyboard numbers={numbers} setNumbers = {setNumbers} />
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
    moveOn:{
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
    }
})