import {GoogleSignin} from 'react-native-google-signin';
import firebase from 'react-native-firebase'

// Calling this function will open Google for login.
export async function googleLogin() {

    GoogleSignin.configure({
        webClientId: '362734164228-5r268580i0rva4p6nib9o2fvj4beopfr.apps.googleusercontent.com',
        iosClientId: '362734164228-b5ml5dkr1srehman8oksheivgajt7f89.apps.googleusercontent.com',
    });
    const userInfo = await GoogleSignin.signIn();

    // @ts-ignore
    const credential = firebase.auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken);
    const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
    return firebaseUserCredential.user;
}