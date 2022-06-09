import React from 'react';
import Navigation from './src/navigation';
import {UserContextProvider} from './src/context/UserContext';
//import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App = () => {
  return (
    <UserContextProvider>
      <Navigation />
    </UserContextProvider>
  );
};

export default App;
