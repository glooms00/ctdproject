import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import { cardData } from '../data';
import styles from '../styles';


  const Card = ({ variant }) => {
    const { imageSource, cityName } = cardData(variant);
  const cardStyle = variant === 'medium' ? styles.cardMedium : styles.cardLarge;
  const triStyle = variant === 'medium' ? styles.triMedium : styles.triLarge;
  const zoneStyle = variant === 'medium' ? styles.zMedium : styles.zLarge;
  const cityStyle = variant === 'medium' ? styles.place : styles.city;

  return (
    <View style={[styles.yellowRectangle, triStyle]}>
      <ImageBackground source={imageSource} style={[styles.card, cardStyle]}>
        <View style={[styles.zone, zoneStyle]}>
          <Text style={[styles.city, cityStyle]}>{cityName}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};


export default Card;

