import React from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  appStyles,
  ASPECT_RATIO,
  fontStyle,
  SCREEN_WIDTH,
  shadow,
} from '../../themes/styles';
import RoundButton from '../../components/RoundButton';
import ProfileSliderComponent from '../../components/ProfileSliderComponent';
import {BACKGROUNDCOLOR, WHITE} from '../../themes/colors';
import PurchasePopUpComponent from '../../components/purchase/PurchasePopUpComponent';
import ImagePicker from 'react-native-image-crop-picker';

class ProfileScreen extends React.PureComponent<any, any> {
  intervel: any = 0;
  

  constructor(props: any) {
    super(props);
    this.state = {
      currentIndex: 0,
      visible: false,
      data: [
        {
          id: 1,
          title: 'Get CareMatch Gold',
          sub_title: 'See who likes you and more!',
        },
        {
          id: 2,
          title: 'Get Matches Faster',
          sub_title: 'Boost your profile once a month!',
        },
        {
          id: 3,
          title: 'Stan out with Super Likes',
          sub_title: 'You are 3 times more likely to get a match!',
        },
        {
          id: 4,
          title: 'Swipe around the world!',
          sub_title: 'Passport to anywhere with CareMatch Plus!',
        },
        {
          id: 5,
          title: 'Control Your Profile',
          sub_title: 'Limit what others see with CareMatch Plus!',
        },
        {
          id: 6,
          title: 'Increase your chances',
          sub_title: 'Get unlimited likes and CareMatch Plus!',
        },
      ],
    };
  }

  componentDidMount(): void {
    this.intervel = setInterval(() => {
      const index = this.state.currentIndex + 1;
      this.setState({
        currentIndex: index > this.state.data.length - 1 ? 0 : index,
      });
    }, 2000);
  }

  componentWillUnmount(): void {
    clearInterval(this.intervel);
  }

  pickMultiple() {
    ImagePicker.openPicker({
      multiple: true,
    }).then((images: any) => {
      console.log(images);
    });
  }

  onPress = () => {
    this.setState({visible: true});
  };

  render() {
    const {data, currentIndex, visible} = this.state;
    return (
      <View style={appStyles.container}>
        <View style={styles.profileTopView}>
          <View style={styles.profileImageView}>
            <FastImage
              style={styles.profileImage}
              source={{
                uri:
                  'http://paperlief.com/images/young-hollywood-actresses-names-wallpaper-2.jpg',
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <Text style={styles.profileTextUsername}>
              {'Angelina Jolie, 35'}
            </Text>
          </View>
          <View style={styles.profileButtonView}>
            <RoundButton
              tag={0}
              title={'SETTINGS'}
              onPress={() => this.props.navigation.navigate('Settings')}
            />
            <RoundButton
              containerStyle={{marginTop: ASPECT_RATIO(40)}}
              tag={1}
              title={'ADD MEDIA'}
              onPress={() => this.pickMultiple()}
            />
            <RoundButton
              tag={2}
              title={'EDIT INFO'}
              onPress={() => this.props.navigation.navigate('EditProfile')}
            />
          </View>
        </View>
        <View style={styles.profileSliderView}>
          <ProfileSliderComponent
            data={data}
            currentIndex={currentIndex}
            onPress={this.onPress}
          />
        </View>
        <PurchasePopUpComponent
          onDismiss={() => this.setState({visible: false})}
          onTouchOutside={() => this.setState({visible: false})}
          visible={visible}
        />
      </View>
    );
  }
}

export default ProfileScreen;

export const styles = StyleSheet.create({
  profileTopView: {
    backgroundColor: BACKGROUNDCOLOR,
    paddingBottom: ASPECT_RATIO(90),
  },
  profileImageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    marginTop: ASPECT_RATIO(20),
    width: ASPECT_RATIO(90),
    height: ASPECT_RATIO(90),
    borderRadius: ASPECT_RATIO(90) / 2,
  },
  profileTextUsername: {
    marginTop: ASPECT_RATIO(10),
    ...fontStyle.largeBlackText,
  },
  profileButtonView: {
    marginTop: ASPECT_RATIO(45),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  profileSliderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
