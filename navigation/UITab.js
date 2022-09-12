import React from "react";
import { TabBarIOSItem, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UseEffects from "../HookRect/UseEffects";
import { TabUseMemos, UseReducers, UseStates } from "../HookRect";

function UITab(props){
    const Tab = createBottomTabNavigator()
return(
    <Tab.Navigator screenOptions={{headerShown:  false}}>
        <Tab.Screen name="UseStates"component={UseStates}/>
        <Tab.Screen name="UseEffects" component={UseEffects}/>
        <Tab.Screen name="TabUseMemos" component={TabUseMemos}/>
        <Tab.Screen name=" UseReducers" component={UseReducers}/>
    </Tab.Navigator>
)
}
export default UITab