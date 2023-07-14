import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';

const Header = () => {
  {/*const { title } = headerData;*/}
  const navigation = useNavigation();

  return (
    <View style={styles.TextZone}>
      <TouchableOpacity style={styles.frameContainer} onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/Frame.png')} style={styles.frameImage} />
      </TouchableOpacity>
      <Text style={styles.title}>the Local's word</Text>
    </View>
  );
};

export default Header;
