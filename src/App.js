 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// FF6A6A
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  //Text,
  StatusBar,
} from 'react-native';
 import Login from './pages/user/login'
 import Router from './Router'
 import { Container, Content, StyleProvider } from 'native-base';

 import getTheme from '../native-base-theme/components';
 import material from '../native-base-theme/variables/material';

const App = () => {
  return (
      <StyleProvider style={getTheme(material)}>
        <Router />
      </StyleProvider>
  );
};


export default App;
