import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { LinearGradient } from 'expo-linear-gradient';

const ImageWithTextComponent = ({ imageTextData }) => {
  const { frameText1, overlayText, textZoneText } = imageTextData;

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.backgroundImage}
    >
        <TouchableOpacity style={styles.FrameContainer}>
          <Image source={require('../assets/Polygon5.png')} style={styles.image} />
          <Text style={styles.FrameText}>play</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.FrameContainer1}>
        <Image source={require('../assets/Frame1.png')} style={styles.image1} />
        <Text style={styles.FrameText1}>{frameText1}</Text>
      </TouchableOpacity>
      <View style={styles.textZone}>
      <LinearGradient colors={['rgba(0, 0, 0, 0.00)', '#000']} style={styles.gradient1}>
        <Text style={styles.overlayText}>{overlayText}</Text>
        <Text style={styles.textZoneText}>{textZoneText}</Text>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default ImageWithTextComponent;