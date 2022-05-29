import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {appStyles, ASPECT_RATIO, font, fontStyle} from '../themes/styles';
import {
  gradientBackground,
  LIGHT_GRAY,
  LIGHT_GRAY_ALPHA,
  WHITE,
} from '../themes/colors';
import Button from '../components/Button';
import {regex} from '../utils/regex';

class LocationScreen extends React.Component<any, any> {
  render() {
    return (
      <View style={appStyles.container}>
        <View style={styles.loginTopView}>
          <View style={styles.locationLogoView}>
            <Image
              resizeMode={'contain'}
              style={appStyles.careMatchIcon}
              source={require('../assets/location_black.png')}
            />
          </View>
        </View>
        <View style={styles.loginBottomView}>
          <Text style={styles.textLocation}>Enable Location</Text>
          <View style={styles.locationView}>
            <Text style={styles.textLocationInfo}>
              You'll need to enable your location in order to user CareMatch
            </Text>
          </View>
          <Button
            title={'ALLOW LOCATION'}
            colors={gradientBackground}
            containerStyle={{marginBottom: 20}}
            textStyle={{fontWeight: '800'}}
            onPress={() => {
              regex.setDashboard('123456', this.props.navigation);
            }}
          />
        </View>
      </View>
    );
  }
}

export default LocationScreen;

export const styles = StyleSheet.create({
  loginTopView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationLogoView: {
    width: ASPECT_RATIO(200),
    height: ASPECT_RATIO(200),
    borderRadius: ASPECT_RATIO(200) / 2,
    backgroundColor: LIGHT_GRAY_ALPHA,
    borderWidth: 1,
    borderColor: LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBottomView: {
    flex: 2,
    padding: 20,
    justifyContent: 'space-between',
  },
  textLocation: {
    textAlign: 'center',
    ...fontStyle.extraLargeBoldBlackText,
  },
  locationView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLocationInfo: {
    marginLeft: 45,
    marginRight: 45,
    textAlign: 'center',
    ...fontStyle.mediumBoldGrayText,
  },
});
