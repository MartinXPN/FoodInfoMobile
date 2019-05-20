import React, {Component} from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import firebase from "react-native-firebase";
// @ts-ignore


interface Props {
}

interface State {
}

export default class Profile extends Component<Props, State> {

    signOut = async () => {
        await firebase.auth().signOut();
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Profile screen</Text>
                <Text style={styles.instructions}>All the profile preferences and public info is shown here</Text>
                <Text style={styles.instructions}>You may sign out any time you want</Text>
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