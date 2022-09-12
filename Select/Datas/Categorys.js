import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  FlatList, 
  ScrollView, 
  TextInput
} from 'react-native';
import imageIcons from '../../assetss/imageIcons';
import {Touchs} from '../../DataTouth';
import CategoryList from './CategoryList';
import DataDM from './Datalist/DataDM';
import DataSP from './Datalist/DataSP';

function Categorys(props) {
  const [seach, setSeach] = useState('');
  const {navigation, rount} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;
  const [dataList, setDataList] = useState(DataDM);
  
 const [count, setCount] = useState(0)

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{
          height: 60,
          flexDirection: 'row',
          // justifyContent: 'space-between',
          paddingTop: 10,
        }}
        source={{
          uri: 'https://anhdep.tv/attachments/6794084f55ed8811e6237710e3ae3915-jpeg.12005/',
        }}>
        <Touchs onPress={() => goBack()} />
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            width: 280,
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <Image
            style={{
              height: 25,
              width: 25,
              tintColor: 'black',
              marginTop: 10,
              marginLeft: 3,
            }}
            source={imageIcons.seach}
          />
          <TextInput
            placeholderTextColor={'black'}
            autoCorrect={false} // tắt tự động sửa
            onChangeText={text => {
              //nhập tìm kiếm=> lưu gtri và gán vào setSeach
              setSeach(text);
            }}
            style={{
              borderColor: 'white',
              height: '100%',
              width: '78%',
              backgroundColor: 'white',
              color: 'black',
            }}></TextInput>
          <Image
            style={{
              height: 28,
              width: 28,
              tintColor: 'black',
              marginTop: 5,
              marginLeft: 2,
            }}
            source={imageIcons.camera}
          />
        </View>
        {/* shopping */}
        <View style={{alignItems:'center',marginLeft:5}}>
          <Text
            style={{
              color: 'white',
              fontSize: 10,
              zIndex: 1,
              height: 17,
              width: 27,
              alignSelf: 'flex-end',
              backgroundColor: 'red',
              position: 'absolute',
              borderRadius:10,
              paddingHorizontal:4,
            
            }}>
           {count}
          </Text>
          <TouchableOpacity style={{marginHorizontal: 5, paddingTop: 10}}>
            <Image
              style={{height: 27, width: 27, zIndex: -1}}
              source={imageIcons.shoppingcar}
            />
          </TouchableOpacity>
        </View>

        {/* Chat */}
        <View style={{alignItems:'center',marginLeft:5}}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              zIndex: 1,
              height: 18,
              width: 18,
              alignSelf: 'flex-end',
              backgroundColor: 'red',
              position: 'absolute',
              borderRadius:10,
              paddingHorizontal:4,
            
            }}>
            0
          </Text>
          <TouchableOpacity style={{marginHorizontal: 5, paddingTop: 10}}>
            <Image
              style={{height: 27, width: 27, zIndex: -1}}
              source={imageIcons.chat}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={{flex:1,backgroundColor:'white',}}>
      <CategoryList onPress={()=>setCount(count+1)} />
      </View>
     
    </View>
  );
}
export default Categorys;
