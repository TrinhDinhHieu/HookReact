import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {imageIcons} from '../../../assetss';

const data = [
  {
    url: 'https://thuvienmuasam.com/uploads/default/original/2X/e/ebace14de8c553f414a830be6bb2b3c13a1194e6.jpeg',
    count: 3,
    price: 250,
  },
  {
    url: 'https://www.mayanhjp.com/ImgUpload/2013//Canon%20EOS%20R%20kit.jpg',
    count: 1,
    price: 2250,
  },
  {
    url: 'https://bumshop.com.vn/wp-content/uploads/2018/11/shop-ban-quan-jean-nam-dep-o-tphcm-16.jpg',
    count: 1,
    price: 350,
  },
  {
    url: 'https://cdn.tgdd.vn/Products/Images/522/269329/pad-pro-m1-11-inch-wifi-cellular-1tb-2021-bac-thumb-600x600.jpeg',
    count: 2,
    price: 3650,
  },
  {
    url: 'https://cdn.tgdd.vn/Files/2020/08/22/1282467/hinh1_800x450.jpg',
    count: 1,
    price: 750,
  },
  {
    url: 'https://cdn.tgdd.vn/Files/2020/08/22/1282467/hinh1_800x450.jpg',
    count: 2,
    price: 250,
  },
  {
    url: 'https://tinhocdaiviet.com/wp-content/uploads/2019/11/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Mechanical-Keyboard-Philips-SPK8614-RGB-1.jpg',
    count: 4,
    price: 640,
  },
];
function ListUser(props) {
  return (
    <View style={{flexDirection: 'row', height: 200, backgroundColor: 'white'}}>
      <FlatList
        data={data}
        horizontal={true} // sắp xếp theo hàng ngang
        showsHorizontalScrollIndicator={false} //tắt thanh trượt dưới
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                justifyContent: 'space-around',
                marginRight: 10,
                marginLeft: 5,
                borderWidth: 1,
                borderColor: '#CCCCCC',
              }}>
              <Image
                source={{uri: item.url}}
                style={{
                  height: 150,
                  width: 150,
                  resizeMode: 'cover',
                marginTop:-2
                }}
              />
              <Text style={{fontSize: 10, marginStart: 5}}>
                đã mua {item.count} lần
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 13, color: 'red', marginStart: 5}}>
                  đ{item.price} .000
                </Text>
                <Image
                  source={imageIcons.shoppingcar}
                  style={{
                    backgroundColor: 'red',
                    height: 20,
                    width: 20,
                    borderRadius: 15,
                    marginRight: 10,
                    resizeMode: 'contain',
                  }}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
export default ListUser;
