/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import AppContainer from './src/navigation/Nav';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
    <AppContainer />
    {/* <Text>Hello</Text> */}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default App;
