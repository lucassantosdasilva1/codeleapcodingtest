import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
} from "@ui-kitten/components";

import * as eva from '@eva-design/eva';

export default function App() {
  return (
    <ApplicationProvider theme={eva.light} {...eva}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
