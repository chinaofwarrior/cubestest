import React from 'react';
import {Text, View, FlatList, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {appStyles, ASPECT_RATIO, fontStyle} from "../../themes/styles";
import FastImage from "react-native-fast-image";
import {RED, WHITE} from "../../themes/colors";

class NewMatchesComponent extends React.PureComponent<any, any>
{
    _keyExtractor = (item : any, index : any) => item.id;

    _renderItem = ({item, index} : any) => {
        return (
            <TouchableWithoutFeedback onPress={()=>{this.props.onMatchPress(item, index)}}>
                <View style={{padding: 10, alignItems: 'center'}}>
                    <View style={styles.imageView}>
                        <FastImage style={styles.image} source={{uri: item.profile}} resizeMode={FastImage.resizeMode.cover}/>
                        {item.online && <View style={styles.onlineView} />}
                    </View>
                    <Text style={styles.textName}>{item.name}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    };

    render() {
        const { new_matches } = this.props;
        return (
            <View>
                <Text style={styles.textTitle}>{'New Matches'}</Text>
                <FlatList
                    data={new_matches}
                    extraData={new_matches}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

export default NewMatchesComponent;

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
    textName: {
        marginTop: 10,
        ...fontStyle.mediumBoldBlackText
    },
})
