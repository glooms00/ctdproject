import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import styles from '../styles';

const Card = () => {
  
    return (
      <ImageBackground
        source={require('../assets/Rectangle1169.png')}
        style={styles.card}
      >
        <View style={styles.Zone}>
          <Text style={styles.city}>city</Text>
        </View>
      </ImageBackground>
    );
  };
  
  export default Card;
  