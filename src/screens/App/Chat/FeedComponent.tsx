import React from 'react';
import {View, FlatList, TouchableWithoutFeedback, Text, Image, StyleSheet} from 'react-native';
import {appStyles, ASPECT_RATIO, fontStyle, SCREEN_WIDTH} from "../../../themes/styles";
import {feedData} from './FeedActivity';
import FastImage from "react-native-fast-image";
import {Icon} from "native-base";
import {gradientBlackBackground, WHITE} from "../../../themes/colors";
import LinearGradient from "react-native-linear-gradient";

class FeedComponent extends React.PureComponent<any, any>
{
    constructor(props: any)
    {
        super(props);
        this.state = {
            data: feedData
        }
    }

    _keyExtractor = (item: any, index: any) => item.id;

    _renderItem = ({item, index}: any) => {
        return (
            <View>
              <View style={styles.userView}>
                 <View style={styles.userInnerView}>
                     <FastImage
                         style={styles.feedImage}
                         source={{uri: item.profile}}
                         resizeMode={FastImage.resizeMode.cover}
                     />
                     <View style={styles.nameView}>
                         <Text style={fontStyle.largeBoldBlackText}>{item.name}</Text>
                         <Text style={fontStyle.mediumGrayText}>{'New match!'}</Text>
                     </View>
                 </View>
                  <TouchableWithoutFeedback>
                      <View style={{justifyContent: 'center'}}>
                          <Icon type='FontAwesome' name='check' style={appStyles.checkRedIcon}/>
                      </View>
                  </TouchableWithoutFeedback>
              </View>
              <View>
                  <FastImage
                      style={styles.imagePost}
                      source={{uri: item.images[index].image}}
                      resizeMode={FastImage.resizeMode.cover}
                  />
                  <LinearGradient
                      start={{x: 0, y: 1}}
                      end={{x: 0, y: 0}}
                      colors={gradientBlackBackground}
                      style={[styles.imagePost, {position: 'absolute'}]}/>
                  <Image resizeMode={'contain'} style={styles.imageMatch} source={require('../../../assets/like.png')} />
                  <View style={styles.locationView}>
                      <Image resizeMode={'contain'} style={styles.imageLocation} source={require('../../../assets/location_black.png')} />
                      <Text>{item.distance}</Text>
                  </View>
                  <Text style={styles.textTime}>{'3 day AGO'}</Text>
              </View>
            </View>
        )
    };

    render() {
        const { data } = this.state;
        return (
            <View style={appStyles.container}>
                <FlatList
                    data={data}
                    extraData={data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

export default FeedComponent;

const styles = StyleSheet.create({
    userView: {
        padding: 10,
        backgroundColor: WHITE,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    userInnerView: {
        flex: 1,
        flexDirection: 'row'
    },
    nameView: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    imagePost: {
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH
    },
    imageMatch: {
        position: 'absolute',
        width: 65,
        height: 65,
        left: 10,
        top: SCREEN_WIDTH - 32
    },
    locationView: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginTop: 32
    },
    imageLocation: {
        width: 18,
        height: 18,
        marginRight: 2
    },
    textTime: {
        ...fontStyle.smallBoldGrayText,
        marginLeft: 12,
        marginBottom: 10
    },
    feedImage: {
        width: ASPECT_RATIO(45),
        height: ASPECT_RATIO(45),
        borderRadius: ASPECT_RATIO(45)/2,
    },
})