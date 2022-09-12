import React from 'react';
import {TabBarIOSItem, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UseEffects from '../HookRect/UseEffects';
import {TabUseMemos, UseReducers, UseStates} from '../HookRect';
import HomeWellcome from '../Select/HomeWellcom';
import {Categorys, Users} from '../Select';
import {imageIcons} from '../assetss';
import Notifications from '../Select/Notificationn/Notifications';
const Tab = createBottomTabNavigator();
const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: 'rgb(217, 103, 15)',
  // tabBarActiveTintColor:colors.Orgent,
  tabBarInactiveTintColor: 'rgb(217, 103, 15)',
  tabBarIcon: ({focused, name, color}) => {
    let screemName = route.name;
    let iconName = '';
    
    if (screemName == 'HomeWellcome') {
      iconName = imageIcons.home;
    } else if (screemName == 'Categorys') {
      iconName = imageIcons.food;
    } else if (screemName == 'Notifications') {
      iconName = imageIcons.notification;
    } else  iconName = imageIcons.user;
    
    // switch (screemName) {
    //   case 'HomeWellcome':
    //     iconName = imageIcons.home;
    //     break
    //     case'Categorys':
    //     iconName = imageIcons.food;
    //     break
    //     case 'Notifications':
    //       iconName = imageIcons.notification;
    //       break
    //      default:
    //         iconName = imageIcons.user
    //         break
            
    // }
    return (
      //chỉ dùng dk 1 image
      <Image
        style={{
          marginStart: 10,
          marginEnd: 5,
          width: 30,
          height: 30,
          tintColor: focused ? 'red' : 'black',
        }}
        source={iconName}
      />
    );
  },
});
function UISelect(props) {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {/* <Tab.Screen name="HomeWellcome" component={HomeWellcome} /> */}
      <Tab.Screen name="Categorys" component={Categorys} />
      {/* <Tab.Screen name="Notifications" component={Notifications} /> */}
      <Tab.Screen name=" Users" component={Users} />
    </Tab.Navigator>
  );
}
export default UISelect;
