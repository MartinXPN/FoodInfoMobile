import React, {Component} from 'react';
import {Button, Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
// @ts-ignore
import firebase, {User} from "react-native-firebase";
import Login from "../auth/Login";


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
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"/>
                <Text style={styles.welcome}>Welcome to FoodInfo!</Text>
                <Text style={styles.instructions}>To get started, take a picture of your dish</Text>
                <Button title={'Sign Out'} onPress={this.signOut}/>
            </View>
        );
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