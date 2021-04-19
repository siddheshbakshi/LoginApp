// In App.js in a new project

import 'react-native-gesture-handler';
import React from 'react';
import {Text,View} from 'react-native';
import LoginPage from './Login Page/LoginPage';
import RegistrationScreen from './Login Page/Registration';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DataFetch from './CustomComponents/DataFetch';
const Stack = createStackNavigator();

const App=()=>{
  return(
   /* <DataFetch/>*/
 <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}
export default App;
