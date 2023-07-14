import React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

const SwiperComponent = () => {
  return (
    <Swiper>
      <View>
        <Text>Slide 1</Text>
      </View>
      <View>
        <Text>Slide 2</Text>
      </View>
      <View>
        <Text>Slide 3</Text>
      </View>
      <View>
        <Text>Slide 4</Text>
      </View>
      <View>
        <Text>Slide 5</Text>
      </View>
    </Swiper>
  );
};
export default SwiperComponent;
