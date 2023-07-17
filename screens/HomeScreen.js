import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Card from '../components/Card';
import styles from '../styles';
import { cardData } from '../data';

const HomeScreen = () => {

  const renderCard = ({ item, index }) => {
    const variant = index < 5 ? 'large' : 'medium';
    return <Card cardData={item} variant={variant} />;
  };
  return (
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.newText}>Regions (5)</Text>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={renderCard}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 23 }} />} 
          contentContainerStyle={{ paddingHorizontal: 15 }} />
        <Text style={styles.newText}>excursions (8)</Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={renderCard}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 23 }} />} 
          contentContainerStyle={{ paddingHorizontal: 15 }} 
        />
      </ScrollView>
   
  );
};

export default HomeScreen;