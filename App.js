import React from 'react';
import { StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyScreen from './screens/MyScreen';
import HomeScreen from './screens/HomeScreen';
import CircuitCreatorScreen from './screens/CircuitCreator';
import FavoriteScreen from './screens/Favorite';
import HomePageScreen from './screens/HomePage';
import NearbyScreen from './screens/Nearby';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
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

          return <Image source={iconName} style={{ width: size, height: size, tintColor: focused ? 'yellow' : 'black' }} />;
        },
      })}
      tabBarOptions={{
        showLabel: false, // Hide the label of each tab
        activeTintColor: 'yellow',
        inactiveTintColor: 'black',
      }}
    >
      <Tab.Screen name="HomePage" component={HomePageScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="CircuitCreator" component={CircuitCreatorScreen} />
      <Tab.Screen name="Nearby" component={NearbyScreen} />
      <Tab.Screen name="MyScreen" component={MyScreen} />
    </Tab.Navigator>
  );
}
