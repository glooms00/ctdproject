import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageWithTextComponent from '../components/ImageWithTextComponent';
import ParagraphComponent from '../components/ParagraphComponent';
import styles from '../styles';
import { imageTextData, paragraphTextData } from '../data';
import Header from '../components/header';

const MyScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        <ImageWithTextComponent imageTextData={imageTextData} />
        <ParagraphComponent paragraphTextData={paragraphTextData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyScreen;