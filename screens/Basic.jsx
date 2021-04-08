import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CalculationView from "../components/CalculationView";
import Keyboard from "../components/Keyboard";
import {windowWidth, windowHeight} from "../global/dimensions";


export default function Basic(){
    const row1 = ['AC', '()', '%','÷'];
    const row2 = ['7', '8', '9','x'];
    const row3 = ['4', '5', '6','-'];
    const row4 = ['1', '2', '3','+'];
    const row5 = ['+|-', '0', '•','='];
    const keys = [[...row1], [...row2], [...row3], [...row4], [...row5]];
    const [calculation, setCalculation] = useState("");
    return(
        <View style={{flex:1, alignItems:"center"}}>
            <View style={{height:windowHeight*0.3, width:windowWidth}}>
                <CalculationView  setCalculation={setCalculation} calculation={calculation} />
            </View>
            <View style={styles.buttonContainer}>
                <Keyboard keys = {keys} setCalculation={setCalculation} calculation={calculation} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: windowHeight*0.7,
        width: windowWidth,
        flex:1,
        marginTop: windowHeight*0.03
    }
})