import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../HookRect/Home';
import UITab from './UITab';
import UISelect from './UISelect';

function AppRN(props){
    const Stack = createNativeStackNavigator();
    return(<NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:  false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='UITab' component={UITab}/>
            <Stack.Screen name='UISelect'component={UISelect}/>
        </Stack.Navigator>
    </NavigationContainer>

    )
}
export default AppRN