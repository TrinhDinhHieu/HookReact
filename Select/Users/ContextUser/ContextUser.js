import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import imageIcons from '../../../assetss/imageIcons';
import  ListUser from './datalistUser'

function ContextUser(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#EEEEEE',
      }}>
      <ScrollView>
        {/*Component Dơn Hàng */}
        <View
          style={{flexDirection: 'row', height: 80, backgroundColor: 'white'}}>
          <View style={{margin: 15}}>
            <Image
              style={{
                width: 30,
                height: 30,
                alignSelf: 'center',
                Color: 'black',
              }}
              source={imageIcons.package}
            />
            <Text style={{fontSize: 13, color: 'black'}}>Chờ xác nhận</Text>
          </View>
          <View style={{margin: 15}}>
            <Image
              style={{width: 30, height: 30, alignSelf: 'center'}}
              source={imageIcons.box}
            />
            <Text style={{fontSize: 13, color: 'black'}}>Chờ lấy hàng</Text>
          </View>
          <View style={{margin: 15}}>
            <Image
              style={{width: 30, height: 30, alignSelf: 'center'}}
              source={imageIcons.truck}
            />
            <Text style={{fontSize: 13, color: 'black'}}>Đang giao</Text>
          </View>
          <View style={{margin: 15}}>
            <Image
              style={{width: 30, height: 30, alignSelf: 'center'}}
              source={imageIcons.project}
            />
            <Text style={{fontSize: 13, color: 'black'}}>Đánh giá</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 35,
            alignItems: 'center',
            backgroundColor: 'white',
            marginTop: 1,
            marginBottom: 5,
          }}>
          <Image
            source={imageIcons.smartphone}
            style={{
              height: 30,
              width: 30,
              tintColor: '#00CC00',
              marginHorizontal: 10,
            }}
          />
          <Text style={{fontSize: 15, color: 'black'}}>
            Đơn Nạp thẻ và Dịch vụ
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 35,
            alignItems: 'center',
            backgroundColor: 'white',
            marginTop: 1,
            marginBottom: 1,
          }}>
          <Image
            source={imageIcons.wallet}
            style={{
              height: 30,
              width: 30,
              tintColor: '#FF9900',
              marginHorizontal: 10,
            }}
          />
          <Text style={{fontSize: 15, color: 'black'}}>Tiện ích</Text>
        </View>
        {/* Component Tiện ích */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'white',
            height: 80,
            alignItems: 'center',
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={imageIcons.walletpay}
              style={{
                height: 30,
                width: 30,
                alignSelf: 'center',
                tintColor: 'red',
                marginBottom: 5,
              }}
            />
            <Text style={{fontSize: 13, color: 'black'}}>Ví Shopee Pay</Text>
            <Text style={{fontSize: 11, color: '#AAAAAA'}}>Sử dụng ngay</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Image
              source={imageIcons.coin}
              style={{
                height: 30,
                width: 30,
                alignSelf: 'center',
                tintColor: '#FFCC33',
                marginBottom: 5,
              }}
            />
            <Text style={{fontSize: 13, color: 'black'}}>Shopee xu</Text>
            <Text style={{fontSize: 11, color: 'red'}}>500 xu</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Image
              source={imageIcons.vocher}
              style={{
                height: 30,
                width: 30,
                alignSelf: 'center',
                tintColor: 'red',
                marginBottom: 5,
              }}
            />
            <Text style={{fontSize: 13, color: 'black'}}>Kho Vocher</Text>
            <Text style={{fontSize: 11, color: 'red'}}>30 vocher</Text>
          </View>
        </View>
        {/* Component mua lại */}
        <View style={{height: 50,flexDirection:'row',backgroundColor:'white',paddingTop:5,justifyContent:'space-between',}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={imageIcons.shopping}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: '#FF9900',
                  marginHorizontal: 10,
                }}
              />
              <Text style={{fontSize: 15, color: 'black'}}>Mua lại</Text>
            </View>
          <View style={{  justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <Text style={{fontSize:12,}}> Xem thêm sản phẩm</Text>
                <Image source={imageIcons.next} style={{ height:30, width:30}}/>
          </View>
        </View>
        < ListUser/>
      {/* Component choice */}
        <View style={{height: 50,flexDirection:'row',backgroundColor:'#FFCCFF',paddingTop:10,justifyContent:'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={imageIcons.shop}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: 'red',
                  marginHorizontal: 10,
                }}
              />
              <Text style={{fontSize: 15, color: 'black'}}>Bắt đầu bán</Text>
            </View>
          <View style={{  justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <Text style={{fontSize:12,}}> Đăng kí miễn phí</Text>
                <Image source={imageIcons.next} style={{ height:30, width:30}}/>
          </View>
        </View>

        <View style={{height: 50,flexDirection:'row',backgroundColor:'white',paddingTop:10,justifyContent:'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={imageIcons.coin}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: '#FF9900',
                  marginHorizontal: 10,
                }}
              />
              <Text style={{fontSize: 15, color: 'black'}}>Shopee xu</Text>
            </View>
          <View style={{  justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <Text style={{fontSize:12,}}> 500 xu</Text>
                <Image source={imageIcons.next} style={{ height:30, width:30}}/>
          </View>
        </View>

        <View style={{height: 50,flexDirection:'row',backgroundColor:'white',paddingTop:10,justifyContent:'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={imageIcons.vocher}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: '#FF9900',
                  marginHorizontal: 10,
                }}
              />
              <Text style={{fontSize: 15, color: 'black'}}>Vocher </Text>
            </View>
          <View style={{  justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
               
                <Image source={imageIcons.next} style={{ height:30, width:30}}/>
          </View>
        </View>
        
        <View style={{height: 50,flexDirection:'row',backgroundColor:'white',paddingTop:10,justifyContent:'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={imageIcons.  walletpay}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: '#FF9900',
                  marginHorizontal: 10,
                }}
              />
              <Text style={{fontSize: 15, color: 'black'}}>Số dư tài khoản</Text>
            </View>
          <View style={{  justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <Text style={{fontSize:12,}}> xem thêm</Text>
                <Image source={imageIcons.next} style={{ height:30, width:30}}/>
          </View>
        </View>

        <View style={{height: 50,flexDirection:'row',backgroundColor:'white',paddingTop:10,justifyContent:'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={imageIcons. information}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: '#FF9900',
                  marginHorizontal: 10,
                }}
              />
              <Text style={{fontSize: 15, color: 'black'}}>Trung tâm hỗ trợ</Text>
            </View>
          <View style={{  justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                
                <Image source={imageIcons.next} style={{ height:30, width:30}}/>
          </View>
        </View>

        <View style={{height: 50,flexDirection:'row',backgroundColor:'white',paddingTop:10,justifyContent:'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={imageIcons.support}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: '#FF9900',
                  marginHorizontal: 10,
                }}
              />
              <Text style={{fontSize: 15, color: 'black'}}>Tổng đài</Text>
            </View>
          <View style={{  justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                
                <Image source={imageIcons.next} style={{ height:30, width:30}}/>
          </View>
        </View>

        <View style={{height: 50,flexDirection:'row',backgroundColor:'white',paddingTop:10,justifyContent:'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={imageIcons.delete}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: '#FF9900',
                  marginHorizontal: 10,
                }}
              />
              <Text style={{fontSize: 15, color: 'black'}}>Xóa</Text>
            </View>
          <View style={{  justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
               
                <Image source={imageIcons.next} style={{ height:30, width:30}}/>
          </View>
        </View>

        
      </ScrollView>
    </View>
  );
}
export default ContextUser;
