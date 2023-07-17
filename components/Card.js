import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import { cardData } from '../data';
import styles from '../styles';

const Card = ({ variant }) => {
  const { imageSource, cityName } = cardData[variant];

  return (
    <View style={styles.yellowRectangle}>
      <ImageBackground
        source={imageSource}
        style={styles.card}
      >
        <View style={styles.zone}>
          <Text style={styles.city}>{cityName}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;
