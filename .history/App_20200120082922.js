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

import {ReactComponent as HeartIcon} from './assets/LoveHeart.svg';
import {ReactComponent as DotsIcon} from './assets/Dots.svg';

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
            <ProfileName>John Doe Cunt</ProfileName>
            {/* <Heart /> */}
            <DotsIcon />
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
  margin-bottom: 10;
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
  border: 1px solid black;
  width: auto;
  height: 22;

  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
`;

const ProfileImage = styled.Image`
  /* border: 1px solid black; */
  /* resize-mode: cover; */
  width: 30;
  height: 30;
  /* clip-path: circle(40%); */
  border-radius: 100px;
`;

const ProfileName = styled.Text`
  font-size: 12;

  color: #919191;
`;

// const Heart = styled(HeartIcon)`
//   margin-left: auto;
// `;

export default App;
