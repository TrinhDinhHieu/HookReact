import React, {useState} from 'react';
import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import {imageIcons} from '../../assetss';
import {Touchs} from '../../DataTouth';
import ContextUser from './ContextUser/ContextUser'

function Users(props) {

  const {navigation, rount} = props;
  const {navigate, goBack} = navigation;
  
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#f76700', height: 150}}>
        <View style={{height: 20}}></View>
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '25%',
              backgroundColor: 'white',
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 5,
            }}>
             <Touchs  onPress={() => goBack()} />

            <Text style={{fontSize: 18, marginTop: 10}}>Back</Text>
          </View>
          <View style={{width: '45%'}} />
          <View
            style={{width: '30%', alignSelf: 'center', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => Alert.alert('setting')}>
              <Image
                style={{width: 30, height: 30, marginHorizontal: 5}}
                source={imageIcons.settings}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{width: 30, height: 30,marginRight: 5, zIndex: -1}}
                source={imageIcons.shoppingcar}
              />
              <Text
                style={{
                  color: 'white',
                  backgroundColor: 'red',
                  fontSize: 10,
                  zIndex: 1,
                  position: 'absolute',
                  alignSelf: 'flex-end',
                  borderRadius: 15,
                  borderWidth: 0.5,
                  marginBottom: 10,
                  borderColor: 'white',
                }}
                // onPress={()=>setCount=(count+1)}
              >
                70
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{width: 30, height: 30,marginRight: 5,marginLeft:5}}
                source={imageIcons.chat}
              />
              <Text
                style={{
                  color: 'white',
                  backgroundColor: 'red',
                  fontSize: 10,
                  zIndex: 1,
                  position: 'absolute',
                  alignSelf: 'flex-end',
                  borderRadius: 15,
                  borderWidth: 0.5,
                  marginBottom: 10,
                  borderColor: 'white',
                  
                }}>
                +99
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: 90, flexDirection: 'row'}}>
          <Image
            style={{
              height: 60,
              width: 60,
              borderRadius: 40,
              marginTop: 25,
              marginLeft: 10,
            }}
            source={{
              uri: 'https://i.pinimg.com/564x/e6/57/55/e65755e73d8085e30aedfa21fde07f1b.jpg',
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              marginTop: 30,
              marginLeft: 10,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              React Hook
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, color: 'black', paddingRight: 5}}>
                Followers: 3000
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  height: 20,
                  opacity: 0.1,
                  marginRight: 5,
                }}
              />
              <Text style={{fontSize: 13, color: 'black'}}>
                Following: 49.7k{' '}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ContextUser/>
    </View>
  );
}
export default Users;
