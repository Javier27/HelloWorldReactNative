/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

var FooScreen = require('./FooScreen');

class HelloWorld extends Component {
  constructor() {
    super();
    this.zoom = this.zoom.bind(this)
  }
  zoom(e) {
  }
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Foo',
          component: FooScreen,
          passProps: { goooooo: this.zoom }
        }}
      />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
