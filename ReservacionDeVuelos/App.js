import React, {useEffect} from 'react';
import Navigation from './src/navigation';
import {UserContextProvider} from './src/context/UserContext';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {CLIENT_ID} from '@env';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: CLIENT_ID,
    });
  });
  return (
    <UserContextProvider>
      <Navigation />
    </UserContextProvider>
  );
};

export default App;
