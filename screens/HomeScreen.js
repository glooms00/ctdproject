import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Card from '../components/Card';
import styles from '../styles';

const HomeScreen = () => {
  return (
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
      <Text style={styles.newText}>Regions (5)</Text>
        <Swiper
          style={styles.miniSwiper}
          containerStyle={styles.miniSwiperContainer}
          showsPagination={false}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Swiper>
      </ScrollView>
  );
};

export default HomeScreen;