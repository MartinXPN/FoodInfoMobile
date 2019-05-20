import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
// @ts-ignore


interface Props {
}

interface State {
}

export default class Diets extends Component<Props, State> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Diets screen!</Text>
                <Text style={styles.instructions}>All the diets you are following are going to appear here</Text>
                <Text style={styles.instructions}>To get started, select some diets that you wish to follow</Text>
                <Text style={styles.instructions}>Enjoy</Text>
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