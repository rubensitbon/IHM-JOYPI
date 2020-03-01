import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function LedSwitch() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>LedSwitch</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Click the button to light led n° XX</Text>
        <Button title="Allume la LED" onPress={() => console.log('ITS ON')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#275C6B',
    margin: 15,
    padding: 15,
    minWidth: 200,
    maxWidth: 300
  },
  title: {
    flex: 1,
    alignItems: 'center'
  },
  body: {
    flex: 1,
    margin: 10,
    justifyContent: 'space-between'
  },
  titleText: {
    fontSize: 15,
    color: '#fff'
  },
  bodyText: {
    fontSize: 10,
    color: '#fff',
    marginBottom: 10
  }
});
