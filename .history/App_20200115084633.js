/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator, StackView} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <ScrollView>
      <View>
        <Text>Organisation</Text>
      </View>
    </ScrollView>
  );
};

const App = () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};

export default App;
