import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import { cardData } from '../data';
import styles from '../styles';
import { LinearGradient } from 'expo-linear-gradient';

const Card = ({ variant }) => {
  const { imageSource, cityName } = cardData(variant);
  let cardStyle, triStyle, zoneStyle, cityStyle;

  if (variant === 'medium') {
    cardStyle = styles.cardMedium;
    triStyle = styles.triMedium;
    zoneStyle = styles.zMedium;
    cityStyle = styles.place;
  } else if (variant === 'slim') {
    cardStyle = styles.cardSlim; 
    triStyle = styles.triSlim;
    zoneStyle = styles.zSlim; 
    cityStyle = styles.place;
  } else if (variant === 'extra') {
    cardStyle = styles.cardExtra; 
    triStyle = styles.triExtra;
    zoneStyle = styles.zExtra; 
    cityStyle = styles.place;
  }else {
    cardStyle = styles.cardLarge;
    triStyle = styles.triLarge;
    zoneStyle = styles.zLarge;
    cityStyle = styles.city;
  }

  return (
    <View style={[styles.yellowRectangle, triStyle]}>
      <ImageBackground source={imageSource} style={[styles.card, cardStyle]}>
        <View style={[styles.zone, zoneStyle]}>       
          <LinearGradient colors={['rgba(0, 0, 0, 0.00)', '#000']} style={styles.gradient}>
            <Text style={[styles.city, cityStyle]}>{cityName}</Text>
          </LinearGradient>
        </View> 
      </ImageBackground>
    </View>
  );
};

export default Card;
