import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import {
  COLORS,
  flexStyles,
  heightStyles,
  widthStyles,
} from './src/shared/styles';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={[flexStyles.flex, heightStyles.hFull, widthStyles.wFull]}
      // responsive design
    >
      <StatusBar backgroundColor={COLORS.primary} />
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
