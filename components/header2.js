import React, { useState } from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback, Image, TextInput, Keyboard } from 'react-native';
import styles from '../styles';

const Header2 = () => {
  const [isTextZoneVisible, setTextZoneVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchPress = () => {
    setTextZoneVisible(true);
  };

  const handleTouchableWithoutFeedbackPress = () => {
    if (isTextZoneVisible) {
      setTextZoneVisible(false);
      setSearchText('');
      Keyboard.dismiss();
    } else {
      setTextZoneVisible(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleTouchableWithoutFeedbackPress}>
      <View style={styles.TextZone}>
        <TouchableOpacity style={styles.FrameContainer3} onPress={handleSearchPress}>
          <Image source={require('../assets/search1.png')} style={styles.frameImage} />
        </TouchableOpacity>
        {isTextZoneVisible && (
          <View style={styles.textZoneContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Type your search here..."
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        )}
        <Image source={require('../assets/fond1.png')} style={styles.fond} />
        <TouchableOpacity style={styles.FrameContainer3} onPress={() => alert('Other button pressed')}>
        <Image source={require('../assets/1116.png')} style={{ width: 19, height: 8 }} />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Header2;
