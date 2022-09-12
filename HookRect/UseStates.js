import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import imageIcons from '../assetss/imageIcons';

function UseStates(props) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count => count + 1);
  };
  const {navigation, rount} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'yellow',
       
      }}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity
          style={{
            margin:5
          }}
          onPress={() => goBack()}>
          <Image
            style={{
              height: 30,
              width: 30,
              tintColor: 'back',
              marginEnd: 5,
            }}
            source={imageIcons.back}
          />
          
        </TouchableOpacity>
        <Text style={{fontSize:20,margin:5}}>Back</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'red',
            justifyContent: 'center',
            borderRadius: 15,
          }}
          onPress={increment}>
          <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 15}}>
            Button
          </Text>
        </TouchableOpacity>
        <Text>Count:{count}</Text>
      </View>
    </View>
  );
}
export default UseStates;
