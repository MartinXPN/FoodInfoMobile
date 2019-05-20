import React, {Component} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {facebookLogin} from "./facebook";
import {googleLogin} from "./google";
import HyperlinkedText from 'react-native-hyperlinked-text';

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

                <Image
                    style={styles.appIcon}
                    source={require('../../res/images/app-icon.png')}/>


                {this.state.authError &&
                <Text style={{color: 'red', textAlign: 'center'}}>
                    Authentication Error!
                    Please try again
                </Text>
                }



                <TouchableOpacity
                    style={[styles.loginButton, styles.fbButton]}
                    activeOpacity={0.5}
                    onPress={() => this.authenticate(facebookLogin)}>
                    <Image
                        style={styles.providerIcon}
                        source={require('../../res/images/fb.png')}/>

                    <Text style={{fontWeight: "bold", color: '#ffffff'}}>Sign in with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.loginButton, styles.googleButton]}
                    activeOpacity={0.5}
                    onPress={() => this.authenticate(googleLogin)}>
                    <Image
                        style={styles.providerIcon}
                        source={require('../../res/images/google.png')}/>

                    <Text style={{fontWeight: "bold", color: '#2e2e2e'}}>Sign in with Google</Text>
                </TouchableOpacity>


                <HyperlinkedText
                    style={{color: '#2e2e2e', textAlign: 'center'}}
                    linkDefs={[
                        {
                            regex: /\[(.*?)\]\((.*?)\)/mgi,
                            style: {color: 'blue'},
                            replaceText: (orig, text, url) => text,
                            onPress: (orig, text, url) => HyperlinkedText._openWebUrl(url)
                        }
                    ]}>
                    By continuing, you are indicating that you accept our [Terms of Service](https://martinxpn.github.io/FoodInfoMobile/terms_and_conditions) and [Privacy Policy](https://martinxpn.github.io/FoodInfoMobile/privacy_policy)
                </HyperlinkedText>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 64,
    },
    appIcon: {
        marginBottom: 250,
        height: 100,
        width: 100,
        resizeMode: 'contain',
    },
    providerIcon: {
        paddingLeft: 24,
        paddingRight: 24,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
    loginButton: {
        alignItems: 'center',
        flexDirection: 'row',

        width: 312,
        height: 48,
        margin: 8,

        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        elevation: 4,
        shadowRadius: 2,
        shadowOffset: {width: 1, height: 2},

        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#cdcdcd'
    },

    fbButton: {backgroundColor: '#3A5997'},
    googleButton: {backgroundColor: '#FFFFFF'},
});