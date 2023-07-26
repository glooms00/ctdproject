import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Header2 from '../components/header2';
import styles from '../styles';
import RegionSection from '../components/RegionSection';
import ExcursionSection from '../components/ExcursionSection';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header2 />
      <ScrollView contentContainerStyle={{ ...styles.scrollViewContent, flexGrow: 0 }} showsVerticalScrollIndicator={false}>
        <RegionSection />
        <ExcursionSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
