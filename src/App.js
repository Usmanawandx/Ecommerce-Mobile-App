import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from 'navigators/app';
import AuthProvider from 'contexts/AuthContext';
import {  DefaultTheme,Provider as PaperProvider } from 'react-native-paper';

LogBox.ignoreLogs(['VirtualizedLists', 'componentWillReceiveProps','Reanimated 2']);

import DrawerNavigator from './navigators/Drawer/DrawerNavigator'

const App = () => {
    
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#e62e2d',
      background: '#000',
      text :'#fff'
    },
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
      <PaperProvider theme={theme}>
        <DrawerNavigator />
      </PaperProvider>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
