import React from 'react';
import {View, FlatList, TouchableWithoutFeedback, Image, Text, Switch, StyleSheet} from 'react-native';
import {appStyles, SCREEN_WIDTH, shadow} from "../../themes/styles";
import {gradientBackground, gradientWhiteBackground, LIGHT_GRAY, RED, WHITE} from "../../themes/colors";
import GradientRoundButton from "./GradientRoundButton";

const PADDING = 10;
const WIDTH = (SCREEN_WIDTH-(PADDING*6))/3;

class PhotosComponent extends React.PureComponent<any, any>
{
    constructor(props : any)
    {
        super(props);
        this.state = {
            data: [
                {
                   id: "1",
                   isServer: false,
                   image: ''
                },
                {
                   id: "2",
                   isServer: false,
                   image: null
                },
                {
                    id: "3",
                    isServer: false,
                    image: null
                },
                {
                    id: "4",
                    isServer: false,
                    image: null
                },
                {
                    id: "5",
                    isServer: false,
                    image: null
                },
                {
                    id: "6",
                    isServer: false,
                    image: null
                },
                {
                    id: "7",
                    isServer: false,
                    image: null
                },
                {
                    id: "8",
                    isServer: false,
                    image: null
                },
                {
                    id: "9",
                    isServer: false,
                    image: null
                }
            ]
        }
    }

    _keyExtractor = (item : any, index : any) => item.id;

    _renderItem = (item : any) => (
        <TouchableWithoutFeedback>
            <View style={{padding: PADDING}}>
                <Image style={{
                    width: WIDTH,
                    height: 150,
                    borderRadius: 5,
                    overflow: 'hidden',
                    backgroundColor: LIGHT_GRAY,
                }}  source={{}}/>
                <GradientRoundButton
                    containerStyle={{position: 'absolute', right: 2, bottom: 2}}
                    icon={item.image === null ? 'add' : 'close'}
                    colors={item.image === null ? gradientBackground : gradientWhiteBackground}
                />
            </View>
        </TouchableWithoutFeedback>
    );

    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.data}
                    extraData={this.state}
                    numColumns={3}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
                <View style={styles.profileSmartView}>
                   <Text style={styles.redTitle}>Smart Photos</Text>
                   <Switch value={true} />
                </View>
                <View style={{padding: 10}}>
                    <Text style={appStyles.textInfo}>Smart Photos continuously tests all your profile photos to find the best one.</Text>
                </View>
            </View>
        );
    }
}

export default PhotosComponent;


const styles = StyleSheet.create({
    profileSmartView: {
        flex: 1,
        marginTop: 15,
        backgroundColor: WHITE,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...shadow(5)
    },
    redTitle: {
        fontSize: 18,
        color: RED,
        fontWeight: '600'
    },
});