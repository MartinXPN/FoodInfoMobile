import React, {Component} from "react";
import {Button, StyleSheet, View} from "react-native";
import {facebookLogin} from "./facebook";
import {googleLogin} from "./google";


interface Props {

}

export default class Login extends Component<Props> {

    async render() {
        return (
            <View style={styles.container}>

                <Button
                    onPress={facebookLogin}
                    title="Sign in with Facebook"
                    color="#841584" />

                <Button
                    onPress={googleLogin}
                    title="Sign in with Google"
                    color="#841584" />
            </View>
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
});