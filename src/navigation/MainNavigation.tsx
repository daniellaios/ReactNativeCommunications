import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/Home';
import FetchScreen from '../screens/http/HttpRequest';

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="FetchScreen" component={FetchScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
