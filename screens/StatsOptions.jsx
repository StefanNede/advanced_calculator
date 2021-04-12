import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Alert, StyleSheet} from 'react-native';

export default function StatsOptions({ route }){
    const { numbers } = route.params;
    numbers.sort(function(a, b){return a-b});
    const countOccurences = (arr, target) => {
        let count = 0;
        arr.forEach((el) => {
            if (el===target){
                count++;
            }
        })
        return count;
    }
    const getMean = () =>{
        let total = 0;
        const length = numbers.length;
        numbers.forEach((number) => total += parseFloat(number));
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
            result = (parseFloat(numbers[length/2]) + parseFloat(numbers[(length/2)-1]))/2
        }
        Alert.alert('Median:',`${result}`, [{ text: 'Ok' }]);
    }
    const getMode = () => {
        let result = 0;
        let maxCount = 0;
        numbers.forEach((number) => {
            const count = countOccurences(numbers, number);
            if (count > maxCount){
                maxCount = count;
                result = number;
            }
        })
        Alert.alert('Mode:',`${result}`, [{ text: 'Ok' }]); 
    }
    // DOESNT WORK
    const getQ1 = () => {
        // let result = 0;
        // const length = numbers.length;
        // const position = length/4
        // if (length%4 === 0){
        //     result = numbers[position-1];
        // }
        // else if (length%4 === 1) {
        //     const difference = (parseFloat(numbers[position-0.25]) - parseFloat(numbers[position - 1.25]))/4;
        //     result = difference + parseFloat(numbers[position - 1.25]);
        // } 
        // else if (length%4 === 2) {
        //     const difference = (parseFloat(numbers[position-0.5]) - parseFloat(numbers[position - 1.5]))/2;
        //     result = difference + parseFloat(numbers[position - 1.5]);
        // } 
        // else if (length%4 === 3) {
        //     const difference = (3*(parseFloat(numbers[position-0.75]) - parseFloat(numbers[position - 1.75])))/4;
        //     result = difference + parseFloat(numbers[position - 1.75]);
        // }
        // Alert.alert('Lower quartile:',`${result}`, [{ text: 'Ok' }]);
    }
    // DOESNT WORK
    const getQ3 = () => {
        // let result = 0;
        // const length = numbers.length;
        // const position = (3*length)/4
        // if (length%4 === 0){
        //     result = numbers[position-1];
        // }
        // else if (length%4 === 1) {
        //     const difference = (parseFloat(numbers[position-0.25]) - parseFloat(numbers[position - 1.25]))/4;
        //     result = difference + parseFloat(numbers[position - 1.25]);
        // } 
        // else if (length%4 === 2) {
        //     const difference = (parseFloat(numbers[position-0.5]) - parseFloat(numbers[position - 1.5]))/2;
        //     result = difference + parseFloat(numbers[position - 1.5]);
        // } 
        // else if (length%4 === 3) {
        //     const difference = (3*(parseFloat(numbers[position-0.75]) - parseFloat(numbers[position - 1.75])))/4;
        //     result = difference + parseFloat(numbers[position - 1.75]);
        // }
        // Alert.alert('Lower quartile:',`${result}`, [{ text: 'Ok' }]);
    }
    const getSD = () => {
        // holds the sum of values
        let totalm = 0;
        // holds the squared sum of values
        let totalsq = 0;
        const length = numbers.length;
        numbers.forEach((number) => {
            totalm += parseFloat(number);
            totalsq += Math.pow(parseFloat(number), 2);
        });
        const mean = totalm/length;
        const sqmean = totalsq/length;
        const calculation = sqmean - Math.pow(mean, 2);
        const result = Math.sqrt(calculation);
        Alert.alert('standard deviation:',`${result}`, [{ text: 'Ok' }]); 
    }
    const getIQR = () => {

    }
    const getRange = () => {
        const result = parseFloat(numbers[numbers.length-1]) - parseFloat(numbers[0]);
        Alert.alert('range:',`${result}`, [{ text: 'Ok' }]);
    }
    const getSkewness = () => {

    }
    return (
        <ScrollView>
            <View style={styles.row}>
                <TouchableOpacity onPress={getMean} style={styles.button}><Text style={styles.text}>mean</Text></TouchableOpacity>
                <TouchableOpacity onPress={getMedian} style={styles.button}><Text style={styles.text}>median</Text></TouchableOpacity> 
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={getMode} style={styles.button}><Text style={styles.text}>mode</Text></TouchableOpacity>
                <TouchableOpacity onPress={getSD} style={styles.button}><Text style={styles.text}>standard deviation</Text></TouchableOpacity> 
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={getQ1} style={styles.button}><Text style={styles.text}>lower quartile</Text></TouchableOpacity>
                <TouchableOpacity onPress={getQ3} style={styles.button}><Text style={styles.text}>upper quartile</Text></TouchableOpacity> 
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={getIQR} style={styles.button}><Text style={styles.text}>inter-quartile range</Text></TouchableOpacity>
                <TouchableOpacity onPress={getRange} style={styles.button}><Text style={styles.text}>range</Text></TouchableOpacity> 
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={getSkewness} style={styles.button}><Text style={styles.text}>skewness</Text></TouchableOpacity>
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