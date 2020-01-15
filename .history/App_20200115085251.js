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
        <ScreenTitle>Organisation</ScreenTitle>
        <SubjectCardWrapper />
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

const ScreenTitle = styled.Text`
  font-size: 16;
  margin-top: 9;
  margin-left: 20;
  margin-right: auto;
`;

const SubjectCardWrapper = styled.View`
  height: 263;
  width: auto;
  background-color: white;
  margin-left: 20;
  margin-right: 20;
  margin-bottom: 10
  margin-top: 10;
`;

export default App;
