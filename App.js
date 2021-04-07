import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Basic from "./screens/Basic";
import Statistics from "./screens/Statistics";


const Stack = createStackNavigator();

function Home({navigation}){
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Basic')} style={{backgroundColor: 'lightgray', borderRadius: 20, padding: 10, margin: 10}}>
        <Text>Go to basic calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('Statistics')} style={{backgroundColor: 'lightgray', borderRadius: 20, padding: 10}}>
        <Text>Go to statistics calculator</Text>
      </TouchableOpacity> 
    </View>
  );
}

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Basic" component={Basic} 
        options={{ title: 'basic calculator', 
        headerStyle: {
            backgroundColor: 'lightgray',
          },
        headerTintColor: 'black',
        }}  />
        <Stack.Screen name="Statistics" component={Statistics} 
        options={{ title: 'statistics calculator',
        headerStyle: {
          backgroundColor: 'lightgray',
        },
        headerTintColor: 'black',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

})