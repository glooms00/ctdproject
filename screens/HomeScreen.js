import React from 'react';
import { SafeAreaView, ScrollView, View, Text, FlatList } from 'react-native';
import Card from '../components/Card';
import styles from '../styles';

const HomeScreen = () => {
  const renderCard = ({ item, index, section }) => {
    const variant = section === 2 ? 'medium' : 'large';
    return <Card variant={variant} />;
  };
  
  
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.newText}>Regions (5)</Text>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={renderCard}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 23 }} />}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          section={1}
        />
        <Text style={styles.newText}>Excursions (8)</Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={renderCard}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 23 }} />}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          section={2} 
        />


      </ScrollView>
    </SafeAreaView>
  );
};


export default HomeScreen;
