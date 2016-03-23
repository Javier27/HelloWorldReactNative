/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class FooScreen extends Component {
  constructor() {
    super();
    this.wahoo = this.wahoo.bind(this)
  }
  wahoo(e) {
    this.props.navigator.push({
      title: 'Foobar',
      component: require('./FoobarScreen'),
      passProps: { goooooo: this.goooooo }
    });
    this.props.goooooo
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Nice job Zak!
        </Text>
        <View style={styles.flowRight}>
          <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this.wahoo}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 100,
    marginRight: 100,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

module.exports = FooScreen;
