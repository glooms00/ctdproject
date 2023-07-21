import React from 'react';
import { StatusBar, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyScreen from './screens/MyScreen';
import HomeScreen from './screens/HomeScreen';
import CircuitCreatorScreen from './screens/CircuitCreator';
import FavoriteScreen from './screens/Favorite';
import HomePageScreen from './screens/HomePage';
import NearbyScreen from './screens/Nearby';
import styles from './styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomHeader = () => {
  return null;
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Tabs" component={TabNavigator} options={{ header: () => <CustomHeader />, headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let containerStyle = [
            styles.FrameContainer2,
            { 
              backgroundColor: focused ? '#FCC433' : 'transparent',
              borderWidth: focused ? 1 : 0,
              borderColor: focused ? '#070A27' : 'transparent',
            }
          ];

          if (route.name === 'HomePage') {
            iconName = require('./assets/Frame2.png');
          } else if (route.name === 'Favorite') {
            iconName = require('./assets/Frame3.png');
          } else if (route.name === 'CircuitCreator') {
            iconName = require('./assets/Group994.png');
          } else if (route.name === 'Nearby') {
            iconName = require('./assets/find1.png');
          } else if (route.name === 'MyScreen') {
            iconName = require('./assets/menu1.png');
          }

          return (
            <View style={containerStyle}>
              <Image source={iconName} style={{ width: 24, height: 24, tintColor: focused ? '#070A27' : '#070A27' }} />
            </View>
          );
        },
        tabBarActiveTintColor: '#070A27',
        tabBarInactiveTintColor: '#070A27',
        tabBarShowLabel: false,
        tabBarStyle: [
          { display: 'flex' },
          null
        ],
      })}
    >
      <Tab.Screen
        name="HomePage"
        component={HomePageScreen}
        options={{
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
        }}
      />
      <Tab.Screen
        name="CircuitCreator"
        component={CircuitCreatorScreen}
        options={{
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
        }}
      />
      <Tab.Screen
        name="Nearby"
        component={NearbyScreen}
        options={{
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
        }}
      />
      <Tab.Screen
        name="MyScreen"
        component={MyScreen}
        options={{
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
        }}
      />
    </Tab.Navigator>
  );
}