/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import AppContainer from './navigation/screens';

const App = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <AppContainer />
      </View>
    </>
  );
};

export default App;
