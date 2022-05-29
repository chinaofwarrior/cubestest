import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';

import {appStyles, fontStyle, shadow} from '../../themes/styles';
import HeaderComponent from '../../components/HeaderComponent';
import {Input, Button} from 'native-base';
import {ICONBACKGROUNDCOLOR, LIGHT_GRAY} from '../../themes/colors';
import {regex} from '../../utils/regex';
import {messages} from '../../utils/messages';

class EmailScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
    };
  }

  onPress = () => {
    const {email} = this.state;
    if (regex.isEmpty(email)) {
      Alert.alert(messages.enterEmail);
    } else if (!regex.validateEmail(email)) {
      Alert.alert(messages.enterValidEmail);
    } else {
      this.props.navigation.navigate('LoginEmailVerification', {
        data: this.state,
      });
    }
  };

  render() {
    return (
      <View style={appStyles.container}>
        <HeaderComponent
          transparent={true}
          leftPress={() => this.props.navigation.goBack()}
        />
        <View style={{marginLeft: 25, marginRight: 25}}>
          <Text style={styles.textTitle}>Log in by email</Text>
          <View style={{marginTop: 15, height: 50}}>
            <View style={styles.textInput}>
              <Input
                value={this.state.email}
                placeholder="Your email is"
                keyboardType={'email-address'}
                autoCapitalize={'none'}
                maxLength={50}
                onChangeText={(email) => this.setState({email})}
              />
            </View>
          </View>
          <View style={styles.emailView}>
            <Text style={styles.textPhone}>
              We'll email you a link that will instantly log you in
            </Text>
          </View>
          <Button onPress={this.onPress} style={styles.button} full rounded={'none'}>
            <Text style={fontStyle.mediumBoldGrayText}>SEND EMAIL</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default EmailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    marginTop: 25,
    ...fontStyle.extraLargeBoldBlackText,
  },
  textInput: {
    marginRight: 10,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: LIGHT_GRAY,
  },
  emailView: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
  },
  textPhone: {
    ...fontStyle.smallBoldGrayText,
  },
  textEmail: {
    ...fontStyle.smallRedText,
    textDecorationLine: 'underline',
  },
  button: {
    marginTop: 35,
    backgroundColor: ICONBACKGROUNDCOLOR,
    ...shadow(5),
  },
});
