import React from 'react';
import {TouchableOpacity, View,Text, ImageBackground} from 'react-native';
import { imageIcons } from '../assetss';

function Home(props) {
  //navigation
  const {navigation, rount} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;

  return (
  <ImageBackground style={{flex:1}}
   source={imageIcons.background}>
    <View style={{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',

        }}>
      <Text style={{color: 'white', fontSize: 30}}>My Home</Text>
      <TouchableOpacity
        onPress={() => navigate('UITab')}
        style={{
             borderWidth:1,
             width:100,
              height:100,
              borderRadius: 50,
              justifyContent:'center',
            backgroundColor:'#FFFF66'
              }}>
        <Text style={{
            alignSelf:'center',
            fontSize:18,
            fontWeight:'bold',
            color:'black'
        }}>React Hook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigate('UISelect')}
        style={{
             borderWidth:1,
             width:100,
              height:100,
              borderRadius: 50,
              justifyContent:'center',
            backgroundColor:'#FFFF66',
          marginTop:10
              }}>
        <Text style={{
            alignSelf:'center',
            fontSize:18,
            fontWeight:'bold',
            color:'black'
        }}>Select</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
    
  );
}
export default Home;
