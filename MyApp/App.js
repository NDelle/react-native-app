import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {RichTextEditor} from 'react-native-zss-rich-text-editor';
import WebViewBridge from 'react-native-webview-bridge';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <RichTextEditor
        ref={(r) => this.richtext = r}
        initialTitleHTML={'Title!!'}
        initialContentHTML={'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'}
        editorInitializedCallback={() => this.onEditorInitialized()}
        />
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