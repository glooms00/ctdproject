import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Image, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import ContentComponent from './contentcomponent';
import styles from './styles';

export default function App() {
  const titleText = "the Local's word";
  const newText = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant";
  const paragraphText1 = "du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500";
  const paragraphText2 = "Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression";
  const paragraphText3 = "Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression";

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.TextZone}>
    <View style={styles.frameContainer}>
          <Image
            source={require('./assets/Frame.png')} 
            style={styles.frameImage}
    /></View>
    <Text style={styles.title}>the Local's word</Text>
    </View>
    <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
    <ImageBackground
        source={require("./assets/background.png")}
        style={styles.backgroundImage}
      >
      <TouchableOpacity style={styles.FrameContainer}>
        <Image source={require('./assets/Polygon5.png')} style={styles.image} />
  <Text style={styles.FrameText}>play</Text>
</TouchableOpacity>
      <View style={styles.FrameContainer1}>
        <Image source={require('./assets/Frame1.png')} style={styles.image1} />
  <Text style={styles.FrameText1}>khnifra</Text>
</View>
      <View style={styles.textZone}>
      <Text style={styles.overlayText}> Ahmed doiw</Text>
      <Text style={styles.textZoneText}>Le Lorem Ipsum est simplement du faux texte employé</Text>          
        </View></ImageBackground>
        
        <ContentComponent
        title={titleText}
        newText={newText}
        paragraphText1={paragraphText1}
        paragraphText2={paragraphText2}
        paragraphText3={paragraphText3}
      />
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

 