import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, SignUp, Flights, From, ToScreen} from '../../screens';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Flights" component={Flights} />
        <Stack.Screen name="From" component={From} />
        <Stack.Screen name="ToScreen" component={ToScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
