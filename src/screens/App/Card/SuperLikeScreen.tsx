import React from 'react';
import {View, FlatList, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {appStyles, ASPECT_RATIO, fontStyle, SCREEN_WIDTH} from "../../../themes/styles";
import FastImage from "react-native-fast-image";
import {gradientBlackBackground} from "../../../themes/colors";
import LinearGradient from "react-native-linear-gradient";
import {range} from "./dummy";

class SuperLikeScreen extends React.PureComponent<any, any>
{
    constructor (props: any) {
        super(props);
        this.state = {
            cards: [...range(1, 15)],
        }
    }

    onPress = (item: any) => {
      this.props.navigation.navigate('CardInfo', {item: item});
    };

    _keyExtractor = (item : any, index : any) => index.toString();

    _renderItem = ({item, index}: any) => (
        <TouchableWithoutFeedback onPress={()=>this.onPress(item)}>
            <View style={styles.itemView}>
                <FastImage
                    style={styles.image}
                    source={{uri: item.images[0].image}}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 0, y: 0}}
                    colors={gradientBlackBackground}
                    style={styles.image}/>
                <View style={styles.userView}>
                    <Text style={fontStyle.mediumWhiteText}>{`${item.username}, ${item.age}`}</Text>
                    <Text style={[fontStyle.mediumBoldRedText, {marginTop: 3}]}>{`3h left`}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );

    render() {
        return (
            <View style={[appStyles.container]}>
                <FlatList
                    data={this.state.cards}
                    extraData={this.state.cards}
                    numColumns={2}
                    keyExtractor={this._keyExtractor}
                    ListHeaderComponent={()=>{
                        return (
                          <View style={styles.topView}>
                             <Text style={fontStyle.extraLargeBoldBlackText}>Top Picks</Text>
                             <Text style={fontStyle.mediumBoldGrayText}>Featured profiles of the day,</Text>
                             <Text style={fontStyle.mediumBoldGrayText}>picked just for you</Text>
                          </View>
                        )
                    }}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

export default SuperLikeScreen;

const styles = StyleSheet.create({
    topView: {
        padding: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemView: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10,
        overflow: 'hidden',
        width: (SCREEN_WIDTH)/2,
        height: ASPECT_RATIO(250)
    },
    image: {
        borderRadius: 10,
        overflow: 'hidden',
        position: 'absolute',
        width: (SCREEN_WIDTH)/2 - 15,
        height: ASPECT_RATIO(250),
        left: 5
    },
    userView: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
        marginLeft: 5,
        marginBottom: 10
    }
});