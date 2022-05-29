import React from 'react'
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {appStyles, font} from '../../themes/styles';
import GradientBackground from '../../components/GradientBackground';
import Button from '../../components/Button';
import {gradientTransparentBackground, WHITE} from '../../themes/colors';
import {regex} from '../../utils/regex';

class LoginScreen extends React.Component<any, any> {
  onFacebookPress = () => {
    regex.setDashboard('123456', this.props.navigation);
  };

  onPhoneNumberPress = () => {
    this.props.navigation.navigate('LoginPhone');
  };

  render() {
    return (
      <View style={appStyles.container}>
        <GradientBackground />
        <View style={styles.loginTopView}>
          <Image
            resizeMode={'contain'}
            style={appStyles.careMatchIcon}
            source={require('../../assets/honest_icon.png')}
          />
        </View>
        <View style={styles.loginBottomView}>
          <View style={styles.loginTextView}>
            <Text style={styles.loginTextStyle}>
              By tapping Log In, you agree with our
            </Text>
            <Text style={styles.loginTextStyle}>
              Terms of Service and Privacy Policy
            </Text>
          </View>
          <Button
            title={'LOG IN WITH FACEBOOK'}
            colors={gradientTransparentBackground}
            textStyle={{fontWeight: '600'}}
            onPress={this.onFacebookPress}
          />
          <Button
            title={'LOG IN WITH PHONE NUMBER'}
            colors={gradientTransparentBackground}
            containerStyle={{marginTop: 8}}
            textStyle={{fontWeight: '600'}}
            onPress={this.onPhoneNumberPress}
          />
          <View style={{marginTop: 15, marginBottom: 10}}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View
                style={[
                  styles.loginTextView,
                  {paddingTop: 8, paddingBottom: 8},
                ]}>
                <Text style={[styles.loginTextStyle, {fontWeight: '600'}]}>
                  Trouble logging in?
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;

export const styles = StyleSheet.create({
  loginTopView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBottomView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  loginTextView: {
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTextStyle: {
    color: WHITE,
    fontSize: font.small,
  },
});
