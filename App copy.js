import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View, Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from 'react-native-ionicons';

const description = Platform.select({
  ios: 'Only for iOS',
  android: 'Only for Android',
});

class HomeScreen extends Component {
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
        <Button
          title="Create Entry"
          onPress={() => this.props.navigation.navigate('Diary')}
          color='blue'
        />
      </View>
    );
  }
}

class DiaryScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>The Diary will come soon.</Text>
      </View>
    );
  }
}

class FeedScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>The Feed will come soon.</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: HomeScreen,
  Diary: DiaryScreen,
  Feed: FeedScreen,
},
/*{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Diary') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Feed') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      }
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}*/
);


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