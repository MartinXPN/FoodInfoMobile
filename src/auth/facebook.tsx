import {AccessToken, LoginManager} from 'react-native-fbsdk';
import firebase from 'react-native-firebase'
import * as React from "react";

// Calling the following function will open the FB login dialogue:
export async function facebookLogin() {
    const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

    if (result.isCancelled)
        throw new Error('User cancelled request');

    const data = await AccessToken.getCurrentAccessToken();
    if (!data)
        throw new Error('Something went wrong obtaining the users access token');

    // create a new firebase credential with the token
    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
    const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
    return firebaseUserCredential.user;
}
