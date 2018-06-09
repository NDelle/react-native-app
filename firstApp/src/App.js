/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { TabNavigator } from 'react-navigation';

//there is a styled-components part installed that I won't use right now but it give the ES6 CSS styles; maybe I will refactor later
import styled from 'styled-components/native';

import Page1 from './pages/Page1';
import Feed from './pages/Feed';


const description = Platform.select({
  ios: 'This is my first iOS App',
  android: 'This is my first Android App',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
  description: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
  cta: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
    marginTop: 20,
    marginBottom: 5,
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Nico's First App
        </Text>
        <Text style={styles.description}>
        {description}
        </Text>
        <Text style={styles.cta}>
          Come Check it out!
        </Text>
        <Image source={require('./src/img/leo_trump.png')}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);


const mainNavigator = TabNavigator({
  Home: {
    screen: App,
    path: 'App'
  },
  Page1: {
    screen: Page1,
    path: './src/pages/Page1/index'
  },
  Feed: {
    screen: Feed,
    path: './src/pages/Feed/index'
  }
});

AppRegistry.registerComponent('App', () => mainNavigator);
