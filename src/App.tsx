/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
} from 'react-native';

import Routes from './routes';

const App = () => {
  return (
    <>
        <StatusBar barStyle="dark-content" />
        <Routes />
    </>
  );
};

export default App;
