import firebase from '../../firebase';
import Cookie from 'js-cookie';

export const PRIVILAGES = {
  ADMIN: 'admin',
  USER: 'user'
};

export const signIn = async (email, password) => {
  return await firebase.auth().signInWithEmailAndPassword(email, password);
};

export const authObserver = async () => {
  await firebase.auth().onAuthStateChanged(user => {
    if (user) {
      Cookie.set('token', user.ra);
    } else {
      Cookie.remove('token');
    }
  });
};

export const signUp = async (name, email, password) => {
  const response = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  await firebase
    .database()
    .ref('/users')
    .child(response.user.uid)
    .set({
      id: response.user.uid,
      name,
      email: response.user.email,
      privilages: PRIVILAGES.USER,
      defaultEventId: ''
    });
};

export const signOut = async () => {
  await firebase.auth().signOut();
};
