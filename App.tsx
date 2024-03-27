/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme
} from 'react-native';

import Toast from 'react-native-toast-message';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Toast />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1, paddingTop: 50},
});

export default App;
