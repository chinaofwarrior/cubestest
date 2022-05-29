import React from 'react';
import {FlatList, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {appStyles, ASPECT_RATIO, fontStyle} from "../../themes/styles";
import FastImage from "react-native-fast-image";
import {RED, WHITE} from "../../themes/colors";

class MessagesComponent extends React.PureComponent<any, any>
{
    _keyExtractor = (item : any) => item.id;

    _renderItem = ({item , index}: any) => {
        return (
            <TouchableWithoutFeedback onPress={()=>{this.props.onPress(item, index)}}>
                <View style={{padding: 10, flexDirection: 'row'}}>
                    <View style={styles.imageView}>
                        <FastImage style={styles.image} source={{uri: item.profile}} resizeMode={FastImage.resizeMode.cover}/>
                        {item.online && <View style={styles.onlineView} />}
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.textName}>{item.name}</Text>
                        <Text style={styles.textMessage}>{item.message}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    };

    render() {
        const {messages} = this.props;
        return (
            <View>
                <Text style={styles.textTitle}>{'Messages'}</Text>
                <FlatList
                    data={messages}
                    extraData={messages}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

export default MessagesComponent;

export const styles = StyleSheet.create({
    textTitle: {
        ...fontStyle.mediumBoldRedText,
        marginLeft: 10,
        marginTop: 10
    },
    imageView: {
        width: ASPECT_RATIO(80),
        height: ASPECT_RATIO(80),
        borderRadius: ASPECT_RATIO(80)/2,
    },
    image: {
        width: ASPECT_RATIO(80),
        height: ASPECT_RATIO(80),
        borderRadius: ASPECT_RATIO(80)/2,
    },
    onlineView: {
        width: ASPECT_RATIO(16),
        height: ASPECT_RATIO(16),
        borderRadius: ASPECT_RATIO(16)/2,
        position: 'absolute',
        right: -8,
        top: ASPECT_RATIO(80)/2 - 8,
        backgroundColor: RED,
        borderWidth: 2,
        borderColor: WHITE
    },
    textView: {
        flex: 1,
        marginLeft: 20,
        marginRight: 10,
        justifyContent: 'center',
    },
    textName: {
        marginTop: 10,
        ...fontStyle.mediumBoldBlackText
    },
    textMessage: {
        marginTop: 3,
        ...fontStyle.smallBoldGrayText
    },
})