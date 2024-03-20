import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from './Dimension';

const Cards = ({name, image, navigation}) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Details', {name});
      }}
      style={({pressed}) => [
        {opacity: pressed ? 0.5 : 1},
        {marginHorizontal: 10},
      ]}>
      <View
        style={{
          height: 100,
          width: deviceWidth / 2 - 50,
          borderRadius: 16,
          overflow: 'hidden',
          marginTop: 20,
        }}>
        <Image
          source={image}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 16,
            resizeMode: 'stretch',
          }}
        />
      </View>
      <Text>{name}</Text>
    </Pressable>
  );
};

export default Cards;

const styles = StyleSheet.create({});
