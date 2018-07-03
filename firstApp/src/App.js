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

import Page1 from './pages/Page1';
import Feed from './pages/Feed';

const description = Platform.select({
  ios: 'Only for iOS',
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
      <Image
          style={{width: 375, height: 250}}
          source={require('firstApp/src/img/leo_trump.png')}/>
        <Text style={styles.header}>
          Nico's Diary
        </Text>
        <Text style={styles.description}>
        {description}
        </Text>
        <Text style={styles.cta}>
          Enjoy the read!
        </Text>
      </View>
    );
  }
}



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

