import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import UserContext from '../context/UserContext.js';
import auth from '@react-native-firebase/auth';

import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import FlightsScreen from '../screens/FlightsScreen';
import FromScreen from '../screens/FromScreen/index.js';
import PassengerScreen from '../screens/PassengerScreen/index.js';
import DateScreen from '../screens/DateScreen';
import ToScreen from '../screens/ToScreen/index.js';
import FinishScreen from '../screens/FinishScreen/index.js';

const Stack = createNativeStackNavigator();

const StackLoged = [
  {name: 'Flights', component: FlightsScreen, title: 'Flights'},
  {
    name: 'Passenger',
    component: PassengerScreen,
    title: 'Passenger',
    shown: true,
  },
  {name: 'From', component: FromScreen, title: 'From'},
  {name: 'DateScreen', component: DateScreen, title: 'DateScreen'},
  {name: 'ToScreen', component: ToScreen, title: 'ToScreen'},
  {name: 'FinishScreen', component: FinishScreen, title: 'FinishScreen'},
];

const StackNoLoged = [
  {
    name: 'Register',
    component: RegisterScreen,
    title: 'Register',
    shown: false,
  },
  {name: 'Login', component: LoginScreen, title: 'Login', shown: false},
];

const typeStack = user => {
  if (user === null) {
    return StackNoLoged;
  } else {
    return StackLoged;
  }
};

export default function Navigation() {
  const {user, setUser} = React.useContext(UserContext);
  function onAuthStateChanged(userInfo) {
    setUser(userInfo);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {typeStack(user).map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
