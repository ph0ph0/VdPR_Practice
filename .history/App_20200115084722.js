/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styled from 'styled-components';

import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator, StackView} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreenWrapper = () => {
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

const HomeScreen = styled(HomeScreenWrapper)``;

export default App;
