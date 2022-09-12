import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import imageIcons from '../assetss/imageIcons';

function Touchs({onPress},navigation) {
//   const {navigation, rount} = props;
//   const onPress=props;
  //function of navigate to/back
//   const {navigate, goBack} = navigation;
  return <View style={{flexDirection:'row',}}>
        <TouchableOpacity
          style={{
            marginLeft:5,
            marginTop:10
          }}
          onPress={onPress}>
          <Image
            style={{
              height: 20,
              width: 25,
              tintColor: 'back',
              marginEnd: 5,
            }}
            source={imageIcons.back}
          />      
        </TouchableOpacity>
        {/* < Text
        style={{fontSize:20,margin:5}}>Back</Text> */}
      </View>
}
export default Touchs