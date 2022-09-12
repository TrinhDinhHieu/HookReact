import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import imageIcons from '../assetss/imageIcons';
import { Touchs } from '../DataTouth';

function HomeWellcome(props) {
  const {navigation, rount} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;
  return <View style={{flex:1}}>
   <Touchs  onPress={() => goBack()} />

  </View>;
}
export default HomeWellcome;