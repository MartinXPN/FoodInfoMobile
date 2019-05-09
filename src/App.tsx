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
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationScreenProp} from "react-navigation";
import AppContainer from "./navigation/AppNavigator";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

interface Props {
    navigation: NavigationScreenProp<any,any>
}

export default class App extends Component<Props> {

    componentDidMount(): void {
        SplashScreen.hide();
        console.log(typeof this.props.navigation);
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <AppContainer />
            // <View style={styles.container}>
            //     <StatusBar barStyle="light-content" backgroundColor="#4F6D7A"/>
            //     <Text style={styles.welcome}>Welcome to React Native!</Text>
            //     <Text style={styles.instructions}>To get started, edit App.tsx</Text>
            //     <Text style={styles.instructions}>{instructions}</Text>
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4F6D7A',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#F5FCFF',
        marginBottom: 5,
    },
});