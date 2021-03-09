/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Businesses from './screens/Businesses';
import BusinessDetail from './screens/BusinessDetail';

const MainNavigator = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator>
        <MainNavigator.Screen name="Home" component={Businesses} />
        <MainNavigator.Screen name="Profile" component={BusinessDetail} initialParams={useNavigation} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;