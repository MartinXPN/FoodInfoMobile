/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {Button, Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationScreenProp} from "react-navigation";
import Login from "./screens/auth/Login";
// @ts-ignore
import firebase, {User} from "react-native-firebase";
import Main from "./screens/main/Main";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

interface Props {
    navigation?: NavigationScreenProp<any, any>;
}

interface State {
    currentUser?: User;
    unsubscribe?: () => void;
}

export default class App extends Component<Props, State> {

    state = {
        currentUser: undefined,
        unsubscribe: undefined,
    };


    componentDidMount(): void {
        SplashScreen.hide();
        console.log(typeof this.props.navigation);
        // this.props.navigation.navigate('Login');

        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            this.setState({currentUser: user});
        });

        this.setState({unsubscribe: unsubscribe});
    }


    componentWillUnmount(): void {
        if (this.state.unsubscribe) {
            // @ts-ignore
            this.state.unsubscribe();
        }
    }

    render() {
        if (this.state.currentUser)
            return (<Main />);

        return (<Login/>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#212121',
    },
    instructions: {
        textAlign: 'center',
        color: '#212121',
        marginBottom: 5,
    },
});