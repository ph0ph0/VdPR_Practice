/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import styled from 'styled-components';

import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator, StackView} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreenWrapper = () => {
  return (
    <ScrollView>
      <View>
        <ScreenTitle>Organisation</ScreenTitle>
        <SubjectCardWrapper>
          <SubjectImage source={require('./assets/WideNarrowGiraffe.jpg')} />
          <TopLineWrapper>
            <ProfileImage source={require('./assets/stockperson.jpg')} />
            <ProfileName>John Doe</ProfileName>
          </TopLineWrapper>
        </SubjectCardWrapper>
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
  border-radius: 5px;
`;

const SubjectImage = styled.Image`
  width: auto;
  height: 90;
  margin-left: 10;
  margin-right: 10;
  margin-top: 10;
  border-radius: 5;
`;

const TopLineWrapper = styled.View`
  flex-direction: row;
  width: auto;
  height: 22;
`;

const ProfileImage = styled.Image`
  resize-mode: cover;
  width: 30;
  height: 30;
  /* clip-path: circle(20px at center); */
  border-radius: 100px;
  border: 1px solid black;
`;

const ProfileName = styled.Text`
  font-size: 12;

  color: 'red';
`;

export default App;
