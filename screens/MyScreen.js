import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageWithTextComponent from '../components/ImageWithTextComponent';
import ParagraphComponent from '../components/ParagraphComponent';
import styles from '../styles';
import { imageTextData, paragraphTextData } from '../data';

const MyScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TextZone}>
        <TouchableOpacity
          style={styles.frameContainer}
          onPress={() => navigation.navigate('Home')}
        >
          <Image
            source={require('../assets/Frame.png')}
            style={styles.frameImage}
          />
        </TouchableOpacity>
        <Text style={styles.title}>the Local's word</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ImageWithTextComponent imageTextData={imageTextData} />
        <ParagraphComponent paragraphTextData={paragraphTextData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyScreen;