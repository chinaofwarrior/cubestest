import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {appStyles, ASPECT_RATIO, fontStyle} from '../../themes/styles';
import HeaderComponent from '../../components/HeaderComponent';

class EmailVerificationScreen extends React.Component<any, any> {
  render() {
    const {navigation} = this.props;
    let data = navigation.state.params.data;
    return (
      <View style={appStyles.container}>
        <HeaderComponent
          transparent={true}
          leftPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.mainView}>
          <Text style={styles.textTitle}>Check your email!</Text>
          <Text
            style={
              styles.textInfo
            }>{`If we found an account with ${data.email}, an email has been sent. Please check your email in a moment`}</Text>
          <Text style={styles.textLink}>{"Didn't receive a link?"}</Text>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('LoginEmail')}>
            <Text style={styles.textEmail}>USE A DIFFERENT EMAIL</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('LoginPhone')}>
            <Text style={styles.textEmail}>USE YOUR PHONE NUMBER</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

export default EmailVerificationScreen;

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textTitle: {
    marginTop: ASPECT_RATIO(65),
    ...fontStyle.extraLargeBoldBlackText,
  },
  textInfo: {
    textAlign: 'center',
    marginRight: 20,
    marginLeft: 20,
    marginTop: ASPECT_RATIO(45),
    ...fontStyle.mediumBoldGrayText,
  },
  textLink: {
    marginTop: ASPECT_RATIO(100),
    ...fontStyle.largeBoldGrayText,
  },
  textEmail: {
    marginTop: ASPECT_RATIO(25),
    padding: 20,
    ...fontStyle.mediumBlackText,
    textDecorationLine: 'underline',
  },
});
