import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import styles from './styles';

async function onGoogleButtonPress() {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
}

const createAccount = (email, password, userName) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
      }
      if (error.code === 'auth/invalid-email') {
      }
    });
};

const loginAccount = (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      // User account created & signed in!
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        // That email address is already in use!
      }
      if (error.code === 'auth/invalid-email') {
        // That email address is invalid!
      }
    });
};

function validate(password, mail, userName, changeAlert) {
  if (userName === undefined) {
    loginAccount(mail, password);
  } else {
    const regexpassword =
      /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?+*-¿!#%&/()=¡\-_]){1})\S{8,16}$/;
    const regexmail =
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    if (regexmail.test(mail) && regexpassword.test(password)) {
      createAccount(mail, password, userName);
    } else {
      changeAlert(true);
    }
  }
}

const func = {
  onGoogleButtonPress,
  createAccount,
  validate,
  buttonstyle: buttonsActive => {
    return {
      ...styles.touchable,
      ...(buttonsActive ? styles.buttonActive : null),
    };
  },
};

export default func;
