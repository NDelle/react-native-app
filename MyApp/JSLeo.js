import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Image
          style={{width: 375, height: 250}}
          source={require('MyApp/src/img/leo_trump.png')}/>
        <Text style={styles.header}>
          Nico's Diary
        </Text>
        <Text style={styles.description}>
        </Text>
        <Text style={styles.cta}>
          Enjoy the read!
        </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    textAlign: 'center',
    color: '#333333',
    fontStyle: 'italic',
  },
  cta: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
    marginTop: 20,
    marginBottom: 20,
  },
  darkGreyButton: {
    color: "#DFDFDF",
  },
});