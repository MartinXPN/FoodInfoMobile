import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Button} from 'native-base';
import {facebookLogin} from "./facebook";
import {googleLogin} from "./google";
import {GoogleSigninButton} from "react-native-google-signin";
import {LoginButton} from "react-native-fbsdk";


interface Props {
}

interface State {
    signInInProgress: boolean;
    authError?: Error;
}

export default class Login extends Component<Props, State> {

    state = {
        signInInProgress: false,
        authError: undefined,
    };

    authenticate = async (auth: Function) => {
        this.setState({
            signInInProgress: true,
            authError: undefined,
        });

        try {
            const user = await auth();
            console.log(user);
        } catch (e) {
            console.error(e);
            this.setState({
                signInInProgress: false,
                authError: e,
            });
        }
    };

    render() {
        return (
            <View style={styles.container}>

                {this.state.authError &&
                <View>
                    <Text>Authentication Error!</Text>
                    <Text>Please try again</Text>
                </View>
                }


                <Button
                    style={styles.fbButton}
                    textStyle={{color: '#fff'}}
                    onPress={() => this.authenticate(facebookLogin)}>
                    <Text>Sign in with Facebook</Text>
                </Button>

                <GoogleSigninButton
                    style={{width: 312, height: 48}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    onPress={() => this.authenticate(googleLogin)}
                    disabled={this.state.signInInProgress}/>
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
    fbButton: {
        width: 312,
        height: 48,
        backgroundColor: '#3A5997',
    }
});