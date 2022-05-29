import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View, Text, Image} from 'react-native';
import {ASPECT_RATIO, font, fontSize, fontStyle, shadow} from "../themes/styles";
import {BACKGROUNDCOLOR, gradientBackground, gradientWhiteBackground, LIGHT_GRAY, WHITE} from "../themes/colors";
import LinearGradient from "react-native-linear-gradient";

const settingImage = require('./../assets/setting.png');
const pencilImage = require('./../assets/pencil.png');
const cameraImage = require('./../assets/camera_white.png');


class RoundButton extends React.PureComponent<any, any> {

    render() {
        const { container, text, iconSize, iconView } = styles;
        const { title, textStyle, containerStyle, tag } = this.props;
        let iconPath = tag === 0
            ? settingImage
            : (tag === 1)
                ? cameraImage : pencilImage;
        let graidentColor = tag === 1 ? gradientBackground : gradientWhiteBackground;
        return (
            <View style={containerStyle}>
                <TouchableWithoutFeedback
                    onPress={this.props.onPress}>
                    <View style={[container]}>
                        <View style={[iconView, {padding: 0}]}>
                            <LinearGradient
                                start={{x: 0, y: 1}}
                                end={{x: 0, y: 0}}
                                colors={graidentColor}
                                style={iconView} >
                                <Image style={iconSize} source={iconPath} resizeMode={'contain'}/>
                            </LinearGradient>
                        </View>
                        <Text style={[text, textStyle]}>{title}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default RoundButton;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: ASPECT_RATIO(100),
        height: ASPECT_RATIO(100),
        borderRadius: ASPECT_RATIO(100)/2
    },
    text: {
        marginTop: 10,
        ...fontStyle.smallBoldGrayText
    },
    iconView: {
      padding: ASPECT_RATIO(20),
      borderRadius: ASPECT_RATIO(40),
      backgroundColor: WHITE,
      ...shadow(5)
    },
    iconSize: {
        width: ASPECT_RATIO(25),
        height: ASPECT_RATIO(25)
    }
});