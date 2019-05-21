import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Home from "../screens/main/Home";
import Diets from "../screens/main/Diets";
import Profile from "../screens/main/Profile";
import {Icon} from "react-native-elements";
import * as React from "react";
import Camera from "../screens/camera/Camera";


const MainScreenNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (<Icon name="home" color={tintColor} size={25}/>)
        }
    },
    Diets: {
        screen: Diets,
            navigationOptions: {
            tabBarLabel: 'Diets',
            tabBarIcon: ({ tintColor, focused }) => (<Icon name="list" color={tintColor} size={25}/>)
        }
    },
    Profile: {
        screen: Profile,
            navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor, focused }) => (<Icon name="person" color={tintColor} size={25}/>)
        }
    },
},
{
    initialRouteName: "Home"
});


const AppNavigator = createStackNavigator({
    Main: MainScreenNavigator,
    Camera: Camera,
},
{
    initialRouteName: "Main"
});

const MainContainer = createAppContainer(AppNavigator);
export default MainContainer;
