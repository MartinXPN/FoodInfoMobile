import {createAppContainer, createStackNavigator} from 'react-navigation';
import Login from "../screens/auth/Login";


const AppNavigator = createStackNavigator(
    {
        Login: Login,
    },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;