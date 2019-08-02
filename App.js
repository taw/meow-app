import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Audio } from 'expo-av';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
  cloud: {
    width: vmin(100),
    height: vmin(100),
  },
});

export default class App extends Component {
  async pressed() {
    try {
      const { sound: soundObject, status } = await Audio.Sound.createAsync(
        require('./assets/meow.wav'),
        { shouldPlay: true }
      );
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tap Cloud ☁️🐈 to MEOW</Text>
        <TouchableHighlight onPress={this.pressed}>
          <Image source={require("./assets/cloud.jpg")} style={styles.cloud} />
        </TouchableHighlight>
      </View>
    );
  }
}
