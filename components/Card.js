import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import { cardData } from '../data';
import styles from '../styles';

const Card = ({ variant }) => {
  console.log;
  const { imageSource, cityName } = cardData;

  const cardStyle = variant === 'medium' ? styles.cardMedium : styles.cardLarge;
  const triStyle = variant === 'medium' ? styles.triMedium : styles.triLarge;

  return (
    <View style={[styles.yellowRectangle, triStyle]}>
      <ImageBackground source={imageSource} style={[styles.card, cardStyle]}>
        <View style={styles.zone}>
          <Text style={styles.city}>{cityName}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};


export default Card;

