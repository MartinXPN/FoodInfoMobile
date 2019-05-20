import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button} from 'native-base';
import {facebookLogin} from "./facebook";
import {googleLogin} from "./google";
import {GoogleSigninButton} from "react-native-google-signin";


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
                    onPress={() => this.authenticate(facebookLogin)}>
                    <Text style={{fontWeight: "bold", color: '#FFFFFF'}}>Sign in with Facebook</Text>
                </Button>

                <GoogleSigninButton
                    style={styles.googleButton}
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
        backgroundColor: '#FFFFFF',
    },
    googleButton: {
        width: 312,
        height: 48,
    },
    fbButton: {
        width: 306,
        height: 45,
        margin: 8,
        borderRadius: 3,
        padding: 8,
        backgroundColor: '#3A5997',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
    }
});