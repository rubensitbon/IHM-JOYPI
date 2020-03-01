import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import LedSwitch from '../components/LedSwitch';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>JoyPi Interface</Text>
        </View>
        <View style={styles.interface}>
          <LedSwitch />
          <LedSwitch />
          <LedSwitch />
          <LedSwitch />
          <LedSwitch />
          <LedSwitch />
          <LedSwitch />
          <LedSwitch />
          <LedSwitch />
          <LedSwitch />
          <LedSwitch />
          <LedSwitch />
          <LedSwitch />
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: 'center'
  },
  header: {
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    color: '#000'
  },
  interface: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});
