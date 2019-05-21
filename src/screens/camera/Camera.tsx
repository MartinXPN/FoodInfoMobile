import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from "react-native-camera";
import {NavigationInjectedProps} from "react-navigation";
import {upload} from "../../api/image/ImageStorage";
import firebase from "react-native-firebase";


type Props = NavigationInjectedProps;


interface State {
    focusedScreen: boolean,
}

export default class Camera extends Component<Props, State> {

    state: State = {
        focusedScreen: false,
    };

    private camera: RNCamera | null = null;

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true, fixOrientation: true, forceUpOrientation: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);

            const downloadUrl = await upload(firebase.auth().currentUser, data.uri);
            console.log(downloadUrl);
        }
    };

    componentDidMount(): void {
        const { navigation } = this.props;
        navigation.addListener('willFocus', () =>
            this.setState({ focusedScreen: true })
        );
        navigation.addListener('willBlur', () =>
            this.setState({ focusedScreen: false })
        );
    }

    cameraView = () => {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#FFFFFFFF"/>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    captureAudio={false}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        console.log(barcodes);
                    }}
                />

                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    };


    render() {
        const { focusedScreen } = this.state;

        if (focusedScreen){
            return (this.cameraView());
        } else {
            return <View />;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});
