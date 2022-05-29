import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import LocationScreen from "../screens/LocationScreen";

let RootStack = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    Location: LocationScreen,
    App: AppStack,
}, {
    initialRouteName: 'AuthLoading',
    navigationOptions: {
        header: null
    }
});


export default createAppContainer(RootStack);