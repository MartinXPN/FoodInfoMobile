import {createAppContainer, createStackNavigator} from 'react-navigation';
import Login from "../auth/Login";


const AppNavigator = createStackNavigator(
    {
        Login: Login,
    },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;