

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


const describtion = Platform.select({
  ios: 'This is my first iOS App',
  android: 'This is my first Android App',
});


export default class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Nico's First App
        </Text>
        <Text style={styles.describtion}>
        {describtion}
        </Text>
        <Text style={styles.cta}>
          Come Check it out!
        </Text>
      </View>
    );
  }
}

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
  describtion: {
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


