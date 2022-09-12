/*
-Hook lấy 2 đối số:useEffect

-callback - một chức năng có tác dụng phụ
-dependencies - một mảng tùy chọn chứa các giá trị phụ thuộc
-Khi hàm component của chúng ta chạy, hàm sẽ được gọi nếu có đã thay đổi kể từ lần cuối cùng component function chạy.callbackdependencies
-Nếu mảng phụ thuộc trống hoặc , sẽ có một hành vi khác.undefineduseEffect

-   [] - the chỉ được gọi một lần, ngay sau khi thành phần kết xuất lần đầu tiêncallback
    undefined - the được gọi trên mọi thành phần render (mỗi khi hàm component chạy)callback
*/

import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Text,Image, Alert} from 'react-native';
import { imageIcons } from '../assetss';

function UseEffects(props){
   
    const {navigation,rount} = props;
    const {navigate,goBack}=navigation;

    const [count, setCount] = useState(0);

    useEffect(() => {// 1 hàm luu 
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 2000);
    },[count]);
console.log(count);
    return (
      <View style={{flex:1}}>
        <TouchableOpacity
          style={{
            margin: 5,
          }}
          onPress={() => goBack('Home')}>
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
        <View style={{justifyContent:'flex-end',alignItems:'center'}}>
        <TouchableOpacity
        onPress={()=>{!count}}/>
            <Text style={{fontSize:20}}
         
            >Count: {count}</Text>
        </View>
      </View>
   
    );
}
export default UseEffects