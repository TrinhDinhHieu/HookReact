import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  Alert,
  FlatList
} from 'react-native';

import DataDM from './Datalist/DataDM';
import DataSP from './Datalist/DataSP';

function CategoryList(props) {
  const {onPress} = props;
  const [dataSP, setDataSp] = useState(DataSP);
  const [dataList, setDataList] = useState(DataDM);


  return (
    <FlatList
      data={dataSP}
      numColumns={2}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity onPress={onPress}>

          <View
            style={{
              flexDirection: 'column',
              marginHorizontal: 4,
              marginTop: 5,
              marginBottom: 5,
            }}>
            <Text
              style={{
                backgroundColor: '#EE0000',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 11,
                height: 20,
                width: 60,
                zIndex: 1,
                position: 'absolute',
                marginTop: 5,
                paddingHorizontal: 4,
                borderBottomRightRadius: 3,
                borderTopRightRadius: 3,
              }}>
              yêu thích
            </Text>
            <Image
              style={{
                height: 150,
                width: 190,
                // resizeMode: 'contain',
                marginRight: 10,
                zIndex: -1,
              }}
              source={{
                uri: item.url,
              }}
            />
            <View style={{width: 170}}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontStyle: 'normal',
                  paddingLeft: 5,
                }}>
                {item.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 5,
                marginTop: 10,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 15,
                }}>
                đ{item.price}.000
              </Text>
              <Text style={{fontSize: 12, paddingRight: 15, marginTop: 2}}>
                Đã bán {item.review}
              </Text>
            </View>
          </View>
          </TouchableOpacity>
        );
      }}
      
      ListHeaderComponent={() => {
        //chèn lên trên
        return (
          <View style={{height: 200, backgroundColor: 'white'}}>
            <Text style={{fontSize: 20, color: 'red', paddingLeft: 5}}>
              Danh Mục
            </Text>
            <FlatList
              data={dataList}
              keyExtractor={item => item.name}
              horizontal={true}
              showsHorizontalScrollIndicator={false} //tắt thanh trượt dưới
              renderItem={({item}) => {
                return (
              <TouchableOpacity style={{marginTop:10}}>
                   <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        height: 70,
                        width: 70,
                        resizeMode: 'cover',
                        borderRadius: 60,
                        marginBottom: 10,
                        marginHorizontal: 15,
                      }}
                      source={{
                        uri: item.url,
                      }}
                    />
                    <Text
                      style={{fontSize: 14, color: 'black', paddingLeft: 10}}>
                      {item.name}
                    </Text>
                  </View>
                  </TouchableOpacity>
                );
              }}
            />
            <View style={{padding: 5, backgroundColor: '#CCCCCC'}}></View>
            <View style={{height: 30, marginHorizontal: 5, marginTop: 10}}>
              <Text style={{fontSize: 15, color: 'red', fontWeight: 'bold'}}>
                Mục yêu thích
              </Text>
            </View>
          </View>
        );
      }}
    />
  );
}
export default CategoryList;
