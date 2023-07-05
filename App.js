import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
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
        
      <Text style={styles.newText}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant</Text>
      <Text style={styles.p}>du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</Text>
      <Text style={styles.p}>Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression</Text>
      <Text style={styles.p}>Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression</Text>
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

const styles = StyleSheet.create({
  container: {
    //marginTop: 30,
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'flex-start',
    borderRadius: 20,
    justifyContent: 'center', 
  },
  TextZone: {
    top: 0,
    left:0,
    width: 375,
    height: 88,
    flexShrink: 0,
    borderRadius: 24,
    background: 'var(--gradient, linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%))',
    justifyContent: 'center',
    gap:8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
  },
  title: {
    color: '#070A27',
    fontSize: 18,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: 24,
    letterSpacing: -0.54,
    textTransform: 'capitalize',
    position: 'absolute',
    top: 32,
    
  },
  backgroundImage: {
    marginTop: 0,
    width: 343,
    height: 295,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    background: '#FFF',
   marginLeft: 16,
    
  },
  frameContainer: {
    marginTop: 0,
    marginLeft: 16,
    position: 'absolute',
    top: 24,
    left: 0,
    display: 'flex',
    padding: 8,
    justifyContent: 'left',
    alignItems: 'center',
    gap: 8,
    borderRadius: 11,
    borderWidth: 1,
    borderColor:  '#FCC433',
    backgroundColor: '#FFF',
  },
  frameImage: {
    width: 24,
    height: 24,
  },
  overlayText: {
    position: 'absolute',
   left: 16,
   top: 20,
   color: '#FFF',
   fontSize: 24,
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: '700',
   lineHeight: 24,
  },
  newText: {
    marginTop: 33,
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: 900,
    lineHeight: 24,
    letterSpacing: -0.54,
    textTransform: 'capitalize',
    color: '#000',
    marginBottom: 16,
    marginLeft: 16,
  },
  p: {
    display: 'flex',
    width: 343,
    flexDirection: 'column',
    flexShrink: 0,
    color: '#595959',
    fontSize: 16,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    fontSize: 16,
    marginBottom: 16,
   marginLeft: 16,
  },
  textZone: {
    top: 80,
    left:0,
    width: 343,
    height: 132,
    flexShrink: 0,
    borderRadius: 24,
    background: 'var(--gradient, linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%))',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textZoneText: {
    top:11,
    display: 'flex',
    width: 296,
    flexDirection: 'column',
    flexShrink: 0,
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
   
  },
  FrameContainer: {
    position: 'absolute',
    top: 278,
    left: 16,
    padding: '8pt 16pt',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    borderRadius: 78,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FCC433',
    flexDirection: 'row',
    width: 77, 
    height: 35, 
  },
  image: {
    width: 11,
    height: 11,
    marginRight: 2,
  
  },
  FrameText: {
    color: '#070A27',
    fontSize: 15,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.75,
    textTransform: 'capitalize',
  },

  FrameContainer1: {
    position: 'absolute',
    top: 16,
    left: 16,
    padding: '8pt  8pt',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    borderRadius: 78,
    borderWidth: 2,
    borderColor: '#070A27',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    width: 80, 
    height: 35, 
  },
  image1: {
    width: 17,
    height: 17,
    marginRight: 2,
  
  },
  FrameText1: {
    color: '#212324',
    fontSize: 14,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: -0.75,
    textTransform: 'capitalize',
  },
  textZone1: {
    bottom: 0,
    left:0,
    width: 375,
    height: 75,
    flexShrink: 0,
    borderRadius: 24,
    background: 'var(--gradient, linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%))',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap:41,
  },
  Image: {
    width: 24,
    height: 24,
    marginRight: 2,
    flexShrink: 0,
  },
  FrameContainer2: {
    width: 48,
   height: 48,
   flexShrink: 0,
   borderRadius: 48,
   borderWidth: 1,
   borderColor: '#070A27',
   backgroundColor: '#FCC433',
   backgroundPosition: '-9.236px -5.2px',
   backgroundSize: '138.484% 136.491%',
   backgroundRepeat: 'no-repeat',
   alignItems: 'center',
   justifyContent: 'center',
  },
  Image1: {
    width: 24,
    height: 24,
    marginRight: 2,
  }
});