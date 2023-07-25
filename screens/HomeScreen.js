import React from 'react';
import { SafeAreaView, ScrollView, View, Text, FlatList } from 'react-native';
import Card from '../components/Card';
import styles from '../styles';
import Header2 from '../components/header2';

const HomeScreen = () => {
  const renderCard = ({ item, index, section }) => {
    const variant = section === 2 ? 'medium' : 'large';
    return <Card variant={variant} />;
  };

  return (
    <SafeAreaView style={styles.container}>
    <Header2 />
      <ScrollView
        contentContainerStyle={{ ...styles.scrollViewContent, flexGrow: 0.5}}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.txt}>Regions (5)</Text>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item, index }) => renderCard({ item, index, section: 1 })}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 23 }} />}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        />
        <Text style={styles.txt}>Excursions (8)</Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({ item, index }) => renderCard({ item, index, section: 2 })}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 23 }} />}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

