import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Card from './Card';
import styles from '../styles';

const RestarentsSection = () => {
  const renderCard = ({ item, index }) => {
    return <Card variant="slim" />;
  };

  return (
    <View >
      <View style={{ justifyContent: 'center', gap: 180, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.txt}>Restarents </Text>
        <TouchableOpacity>
          <Text style={{ color: 'grey', width: 68, height: 19, fontSize: 18 }}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: '#FFF', height: 230 }}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={({ item, index }) => renderCard({ item, index })}
        keyExtractor={(item) => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 28 }} />}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
    </View>
  );
};

export default RestarentsSection;
