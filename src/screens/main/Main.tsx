import React, {Component} from 'react';
import {Button, Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
// @ts-ignore
import firebase, {User} from "react-native-firebase";
import Home from "./Home";
import MainContainer from "../../navigation/MainNavigation";


interface Props {
}

interface State {
}

export default class Main extends Component<Props, State> {

    state = {
        currentUser: undefined,
        unsubscribe: undefined,
    };

    signOut = async () => {
        await firebase.auth().signOut();
    };

    render() {
        return (
            <MainContainer />
        );
    }
}
