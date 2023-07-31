import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from '../styles';

const Album = () => {

  return (
    <View>
      <View style={{ justifyContent: 'center', gap: 103, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.txt}>Top Experiences (8)</Text>
        <TouchableOpacity style={{ flexDirection: 'row', gap: 0 }}>
          <Text style={{ color: 'grey', width: 68, height: 19, fontSize: 18 }}>See All</Text>
        </TouchableOpacity>
      </View>

      
      <View style={{ alignItems: 'flex-start' }}>
        <View style={styles.yellowRectangle1}>
          <View style={styles.whiteRectangle}>
            <View style={{ justifyContent: 'center', gap: 2, flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/Rectangle1169(1).png')} style={{ width: 197, height: 240 }} />
              <View style={{ gap: 2 }} >
                <Image source={require('../assets/Rectangle1170(1).png')} style={{ width: 111, height: 118 }} />
                <Image source={require('../assets/Rectangle1168.png')} style={{ width: 111, height: 120 }} />
              </View>
            </View>
            <Text style={styles.txt1}>4X4 circuit and hiking in the province of khouribga</Text>
            <View style={{ alignItems: 'flex-start', flexDirection: 'row', gap: 7 }}>
              <Image source={require('../assets/Frame1.png')} style={styles.image1} />
              <Text style={styles.lilText}>3 Stops</Text>
              <Text style={styles.lilText}>culture</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};


export default Album;

