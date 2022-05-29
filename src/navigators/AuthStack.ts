import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from "../screens/Auth/LoginScreen"
import PhoneNumberScreen from "../screens/Auth/PhoneNumberScreen";
import EmailScreen from "../screens/Auth/EmailScreen";
import EmailVerificationScreen from "../screens/Auth/EmailVerificationScreen";
import PhoneVerificationCodeScreen from "../screens/Auth/PhoneVerificationCodeScreen";

let AuthStack = createStackNavigator({
    Login: LoginScreen,
    LoginPhone: PhoneNumberScreen,
    LoginPhoneVerification: PhoneVerificationCodeScreen,
    LoginEmail: EmailScreen,
    LoginEmailVerification: EmailVerificationScreen,
}, {
    defaultNavigationOptions: {
        header: undefined
    }
});


export default AuthStack;