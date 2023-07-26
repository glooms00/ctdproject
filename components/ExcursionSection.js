import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Card from './Card';
import styles from '../styles';

const ExcursionSection = () => {
  const renderCard = ({ item, index }) => {
    return <Card variant="medium" />;
  };

  return (
    <View >
      <View style={{ justifyContent: 'center', gap: 149, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.txt}>Excursions (8)</Text>
        <TouchableOpacity>
          <Text style={{ color: 'grey', width: 68, height: 19, fontSize: 18 }}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={({ item, index }) => renderCard({ item, index })}
        keyExtractor={(item) => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 23 }} />}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
};

export default ExcursionSection;
