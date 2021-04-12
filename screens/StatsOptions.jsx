import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Alert, StyleSheet} from 'react-native';

export default function StatsOptions({ route }){
    const { numbers } = route.params;
    numbers.sort(function(a, b){return a-b});
    const getMean = () =>{
        let total = 0;
        const length = numbers.length;
        numbers.forEach((number) => total += parseInt(number));
        const result = total/length;
        Alert.alert('Mean:',`${result}`, [{ text: 'Ok' }]);
    }
    const getMedian = () =>{
        let result = 0;
        const length = numbers.length;
        if (length%2 === 1){
            result = numbers[(length-1)/2];
        }
        else {
            result = (parseInt(numbers[length/2]) + parseInt(numbers[(length/2)-1]))/2
        }
        Alert.alert('Median:',`${result}`, [{ text: 'Ok' }]);
    }
    return (
        <ScrollView>
            <View style={styles.row}>
            <TouchableOpacity onPress={getMean} style={styles.button}><Text style={styles.text}>Mean</Text></TouchableOpacity>
            <TouchableOpacity onPress={getMedian} style={styles.button}><Text style={styles.text}>Median</Text></TouchableOpacity> 
            </View>
            <View style={styles.row}>
            <TouchableOpacity onPress={getMean} style={styles.button}><Text style={styles.text}>Mean</Text></TouchableOpacity>
            <TouchableOpacity onPress={getMean} style={styles.button}><Text style={styles.text}>Mean</Text></TouchableOpacity> 
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    row: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
    },
    button: {
        width: '40%',
        marginRight: '3%',
        marginLeft: '3%',
        paddingVertical: '7.5%',
        backgroundColor: 'lightgrey',
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 20
    },
    text: {
        fontSize: 22.5,
    }
})