import React, {Component} from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationInjectedProps} from "react-navigation";



interface State {
}
type Props = NavigationInjectedProps;


export default class Home extends Component<Props, State> {

    launchCamera = () => {
        const { navigate } = this.props.navigation;
        navigate('Camera');
    };

    render() {

        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"/>
                <Text style={styles.welcome}>Welcome to FoodInfo!</Text>
                <Text style={styles.instructions}>All the pictures of your dishes appear here</Text>
                <Text style={styles.instructions}>To get started, snap your dish</Text>
                <Button title={'Take a picture'} onPress={this.launchCamera}/>
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