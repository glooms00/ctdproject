import React from 'react';
import { SafeAreaView, ScrollView, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Card from '../components/Card';
import styles from '../styles';
import Header2 from '../components/header2';
import Album from '../components/Album';
import RegionSection from '../components/RegionSection';
import ExcursionSection from '../components/ExcursionSection';

const HomeScreen = () => {
  
  return (
    <SafeAreaView style={styles.container}>
    <Header2 />
    <ScrollView contentContainerStyle={{ ...styles.scrollViewContent, flexGrow: 0.6 }} showsVerticalScrollIndicator={false}>
        <RegionSection />
        <ExcursionSection />
        <Album />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;