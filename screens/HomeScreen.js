import React from 'react';
import { SafeAreaView, ScrollView, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Card from '../components/Card';
import styles from '../styles';
import Header2 from '../components/header2';
import Album from '../components/Album';
import RegionSection from '../components/RegionSection';
import ExcursionSection from '../components/ExcursionSection';
import RestarentsSection from '../components/RestarentsSection';

const HomeScreen = () => {
  
  return (
    <SafeAreaView style={styles.container}>
    <Header2 />
    <ScrollView contentContainerStyle={{ ...styles.scrollViewContent, flexGrow: 0.6 }} showsVerticalScrollIndicator={false}>
        <RegionSection />
        <ExcursionSection />
        <Album />
        <View style={{ backgroundColor: '#FFF', top:24 }}>
        <RegionSection />
        <RegionSection />
        <RegionSection />
        <RestarentsSection />
        <ExcursionSection />
        <RestarentsSection />
        </View>
      </ScrollView>
    </SafeAreaView>
    
  );
};

export default HomeScreen;