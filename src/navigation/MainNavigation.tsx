import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Home from "../screens/main/Home";
import Diets from "../screens/main/Diets";
import Profile from "../screens/main/Profile";
import {Icon} from "react-native-elements";
import * as React from "react";


// @ts-ignore
const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon name="home" color={tintColor} size={25}/>
            )
        }
    },
    Diets: {
        screen: Diets,
            navigationOptions: {
            tabBarLabel: 'Diets',
                tabBarIcon: ({ tintColor, focused }) => (
                <Icon name="list" color={tintColor} size={25}/>
        )
        }
    },
    Profile: {
        screen: Profile,
            navigationOptions: {
            tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor, focused }) => (
                <Icon name="person" color={tintColor} size={25}/>
        )
        }
    },
},
{
    initialRouteName: "Home"
});

const MainContainer = createAppContainer(TabNavigator);
export default MainContainer;
