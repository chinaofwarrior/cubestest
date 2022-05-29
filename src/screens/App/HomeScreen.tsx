import React from 'react';
import {
  SafeAreaView,
  View,
  Platform,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
} from 'react-native';
import CardScreen from './Card/CardScreen';
import ChatScreen from './Chat/ChatScreen';
import ProfileScreen from './ProfileScreen';
import {BACKGROUNDCOLOR, ICONBACKGROUNDCOLOR, WHITE} from '../../themes/colors';
import SuperLikeScreen from './Card/SuperLikeScreen';
import {ASPECT_RATIO, shadow} from '../../themes/styles';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {OS} from '../../utils/regex';

class HomeScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      cardIndex: 0,
      scrollWithoutAnimation: true,
    };
  }

  renderTopTabBar = (props: any) => {
    return (
      <View style={[styles.tabs]}>
        {props.tabs.map((tab: any, i: any) => {
          return (
            <TouchableOpacity
              key={i.toString()}
              onPress={() => props.goToPage(i)}
              style={styles.tab}>
              {i === 0 ? (
                <Image
                  resizeMode={'contain'}
                  style={styles.iconSize}
                  source={
                    props.activeTab === 0
                      ? require('../../assets/selected_profile.png')
                      : require('../../assets/profile.png')
                  }
                />
              ) : i === 1 ? (
                <View>
                  {props.activeTab === 1 ? (
                    <View style={styles.cardView}>
                      <TouchableWithoutFeedback
                        onPress={() => {
                          this.setState({cardIndex: 0});
                        }}>
                        <View
                          style={
                            this.state.cardIndex === 0
                              ? styles.cardActiveView
                              : styles.cardInactiveView
                          }>
                          <Image
                            resizeMode={'contain'}
                            style={styles.iconSize}
                            source={
                              this.state.cardIndex === 0
                                ? require('../../assets/selected_logo.png')
                                : require('../../assets/logo_gray.png')
                            }
                          />
                        </View>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback
                        onPress={() => {
                          this.setState({cardIndex: 1});
                        }}>
                        <View
                          style={
                            this.state.cardIndex === 1
                              ? styles.cardActiveView
                              : styles.cardInactiveView
                          }>
                          <Image
                            resizeMode={'contain'}
                            style={styles.iconSize}
                            source={
                              this.state.cardIndex === 1
                                ? require('../../assets/selected_top_picks.png')
                                : require('../../assets/top_picks.png')
                            }
                          />
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                  ) : (
                    <Image
                      resizeMode={'contain'}
                      style={styles.iconSize}
                      source={require('../../assets/logo_gray.png')}
                    />
                  )}
                </View>
              ) : (
                <Image
                  resizeMode={'contain'}
                  style={styles.iconSize}
                  source={
                    props.activeTab === 2
                      ? require('../../assets/selected_chat.png')
                      : require('../../assets/chat.png')
                  }
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: BACKGROUNDCOLOR, paddingTop: OS === 'android' ? 30 : 0 }}>
        {/* <ScrollableTabView
          style={{marginTop: 0}}
          initialPage={1}
          locked={true}
          renderTabBar={this.renderTopTabBar}>
          <View style={styles.tabView}>
            <ProfileScreen navigation={this.props.navigation} />
          </View>
          <View style={styles.tabView}>
            {this.state.cardIndex === 0 ? (
              <CardScreen navigation={this.props.navigation} />
            ) : (
              <SuperLikeScreen navigation={this.props.navigation} />
            )}
          </View>
          <View style={styles.tabView}>
            <ChatScreen navigation={this.props.navigation} />
          </View>
        </ScrollableTabView> */}
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: BACKGROUNDCOLOR,
  },
  iconSize: {
    width: ASPECT_RATIO(30),
    height: ASPECT_RATIO(30),
  },
  cardView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ICONBACKGROUNDCOLOR,
    borderRadius: 25,
    ...shadow(5)
  },
  cardInactiveView: {
    padding: ASPECT_RATIO(10),
    paddingLeft: ASPECT_RATIO(15),
    paddingRight: ASPECT_RATIO(15),
    borderRadius: ASPECT_RATIO(25),
    backgroundColor: 'transparent',
  },
  cardActiveView: {
    padding: ASPECT_RATIO(10),
    paddingLeft: ASPECT_RATIO(15),
    paddingRight: ASPECT_RATIO(15),
    borderRadius: ASPECT_RATIO(25),
    backgroundColor: WHITE,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 60,
    flexDirection: 'row',
  },
  tabView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
