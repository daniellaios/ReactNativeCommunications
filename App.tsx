import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import MainNavigation from './src/navigation/MainNavigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MainNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
