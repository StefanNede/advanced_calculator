import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function StatsKeyboard(){
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity>
                    <Text>7</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>8</Text> 
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>9</Text> 
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity>
                    <Text>4</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>5</Text> 
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>6</Text> 
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity>
                    <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>3</Text>
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
    }
})