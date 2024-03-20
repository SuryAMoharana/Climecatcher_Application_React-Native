import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimension';
import Entypo from 'react-native-vector-icons/Entypo';
import {API_KEY} from './Constant';

const Details = ({route}) => {
  const {name} = route.params;
  const [data, setData] = useState();
  const Data = ({title, value}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{color: 'gray', fontSize: 22}}>{title}</Text>
      <Text style={{color: 'white', fontSize: 22}}>{value}</Text>
    </View>
  );
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);
  return (
    <View>
      <ImageBackground
        source={require('../assets/Images/DetailBackground.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.3, backgroundColor: 'black'}}
        resizeMode="stretch"
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: deviceWidth - 20,
          }}>
          <Entypo name="menu" size={30} color="white" />
          <Image
            source={require('../assets/Images/Surya_Moharana.jpg')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View>
        {data ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 100,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 40}}>{name}</Text>
              <Text style={{fontSize: 22, color: 'white', textAlign: 'center'}}>
                {data['weather'][0]['main']}
              </Text>
            </View>

            <Text style={{color: 'white', fontSize: 64}}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>

            <View>
              <Text style={{color: 'white', fontSize: 22, marginBottom: 16}}>
                Weather Details
              </Text>
              <View style={{width: deviceWidth - 60}}>
                <Data value={data['wind']['speed']} title="Wind" />
                <Data value={data['main']['pressure']} title="Pressure" />
                <Data value={`${data['main']['humidity']}%`} title="Humidity" />
                <Data value={data['visibility']} title="Visibility" />
              </View>
            </View>
          </View>
        ) : (
          <Text>Please enter a valid city</Text>
        )}
      </View>
    </View>
  );
};

export default Details;
