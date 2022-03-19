import React from 'react';
import CreatePage from './Create';
import ViewPage from './View';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="View" component={ViewPage} />
        <Stack.Screen name="Create" component={CreatePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
