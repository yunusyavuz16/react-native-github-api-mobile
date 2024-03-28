import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import HomeScreen from './src/screens/HomeScreen';
import {
  COLORS,
  flexStyles,
  heightStyles,
  widthStyles,
} from './src/shared/styles';

function App(): React.JSX.Element {
 

  return (
    <ErrorBoundary>
      <SafeAreaView
        style={[flexStyles.flex, heightStyles.hFull, widthStyles.wFull]}>
        <StatusBar backgroundColor={COLORS.primary} />
        <HomeScreen />
      </SafeAreaView>
    </ErrorBoundary>
  );
}

export default App;
