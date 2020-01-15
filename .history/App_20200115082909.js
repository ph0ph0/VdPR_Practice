/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationNativeContainer} from '@react-navigation/native';

const App: () => React$Node = () => {
  return (
    <NavigationNativeContainer>
      <SafeAreaView>
        <Text>Organisation Lobby</Text>
      </SafeAreaView>
    </NavigationNativeContainer>
  );
};

export default App;
