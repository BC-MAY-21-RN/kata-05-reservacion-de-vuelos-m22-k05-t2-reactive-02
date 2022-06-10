import React, {useEffect} from 'react';
import Navigation from './src/navigation';
import {UserContextProvider} from './src/context/UserContext';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '959127818437-tk3msn40d4lslgkrm57a8dp4sti7fl8l.apps.googleusercontent.com',
    });
  });
  return (
    <UserContextProvider>
      <Navigation />
    </UserContextProvider>
  );
};

export default App;
