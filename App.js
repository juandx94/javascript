/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, View} from 'react-native';

import TodoScreen from './src/screen/TodoScreen';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1}}>
        <TodoScreen />
      </View>
    </>
  );
};

export default App;
