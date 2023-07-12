import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ImageWithTextComponent from './components/ImageWithTextComponent';
import ParagraphComponent from './components/ParagraphComponent';
import styles from './styles';
import { imageTextData, paragraphTextData } from './data';



export default function App() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.TextZone}>
    <TouchableOpacity
  style={styles.frameContainer}
  onPress={() => navigation.navigate('Home')}
>
  <Image
    source={require('./assets/Frame.png')} 
    style={styles.frameImage}
  />
 </TouchableOpacity>
    <Text style={styles.title}>the Local's word</Text>
    </View>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ImageWithTextComponent imageTextData={imageTextData} />
        <ParagraphComponent paragraphTextData={paragraphTextData} />
        <StatusBar style="auto" />
      </ScrollView>
    <View style={styles.textZone1}>
      <Image source={require('./assets/Frame2.png')} style={styles.Image} />
      <Image source={require('./assets/Frame3.png')} style={styles.Image} />
      <Image source={require('./assets/Group994.png')} style={styles.Image} />
      <Image source={require('./assets/find1.png')} style={styles.Image} />
      <TouchableOpacity style={styles.FrameContainer2}>
        <Image source={require('./assets/menu1.png')} style={styles.Image1} />
</TouchableOpacity>
        </View>
 
    </SafeAreaView>
  );
}

 