import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimension';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Cards from './Cards';

const Home = ({navigation}) => {
  const [city, setCity] = useState('');

  const cities = [
    {
      name: 'Rourkela',
      image: require('../assets/Images/Rourkela.jpg'),
    },
    {
      name: 'Bhubaneswar',
      image: require('../assets/Images/Bhubaneswar.jpg'),
    },
    {
      name: 'Bengaluru',
      image: require('../assets/Images/Bengaluru.jpg'),
    },
    {
      name: 'Hyderabad',
      image: require('../assets/Images/Hyderabad.jpg'),
    },
    {
      name: 'Delhi',
      image: require('../assets/Images/Delhi.jpg'),
    },
  ];

  return (
    <View>
      <ImageBackground
        source={require('../assets/Images/Background.png')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.3, backgroundColor: 'black'}}
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
        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          <Text style={{fontSize: 30, color: 'white'}}>
            Hello Surya Moharana
          </Text>
          <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
            Search City by Name
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 1,
              borderRadius: 50,
              borderColor: 'white',
              marginTop: 16,
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
            />
            <Pressable
              onPress={() => navigation.navigate('Details', {name: city})}
              style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}>
              <Octicons name="search" size={22} color="white" />
            </Pressable>
          </View>
          <Text style={{color: 'white', fontSize: 25, marginTop: 150}}>
            My Locations
          </Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({item}) => (
              <Cards
                name={item.name}
                image={item.image}
                navigation={navigation}
              /> // Assuming item.image is a valid source
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
