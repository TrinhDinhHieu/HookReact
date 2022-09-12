import React from "react";
import { View,Text,TouchableOpacity,Image } from "react-native";
import { imageIcons } from "../assetss";

function TabUseMemos(props){
    const {navigation, rount} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;
return(
    <View>
       <View style={{flexDirection:'row'}}>
        <TouchableOpacity
          style={{
            margin:5
          }}
          onPress={() =>goBack('UseStates')}>
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
    </View>
)
}
export default TabUseMemos