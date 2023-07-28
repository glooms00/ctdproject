import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Card from './Card';
import styles from '../styles';

const RegionSection = () => {
  const renderCard = ({ item, index }) => {
    return <Card variant="large" />;
  };

  return (
    <View>
      <View style={{ justifyContent: 'center', gap: 176, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.txt}>Regions (5)</Text>
        <TouchableOpacity style={{ flexDirection: 'row', gap: 0 }}>
          <Text style={{ color: 'grey', width: 68, height: 19, fontSize: 18 }}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: '#FFF', height: 284 }}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={({ item, index }) => renderCard({ item, index })}
        keyExtractor={(item) => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 28 }} />}
        contentContainerStyle={{ paddingHorizontal: 15,  flexGrow:0}}/>
      </View>
    </View>
    
  );
};

export default RegionSection;
