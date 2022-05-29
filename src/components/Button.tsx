import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View, Text, GestureResponderEvent} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {ASPECT_RATIO} from "../themes/styles";
import {WHITE} from "../themes/colors";

export interface GradientBackgroundProps {
    title: any
    buttonStyle?: any
    colors: any
    textStyle : any
    containerStyle? : any
    onPress: ((event: GestureResponderEvent) => void) | undefined
}

class GradientBackground  extends React.PureComponent<any, any> {
    render() {
        const { container, text } = styles;
        const { title, buttonStyle, colors, textStyle, containerStyle } = this.props;
        return (
            <View style={containerStyle}>
                <TouchableWithoutFeedback
                    onPress={this.props.onPress}>
                    <LinearGradient
                        colors={colors}
                        start={{x: 1, y: 0}}
                        end={{x: 0, y: 0}}
                        style={[container, buttonStyle]}> 
                        <Text style={[text, textStyle]}>{title}</Text>
                    </LinearGradient>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default GradientBackground;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: ASPECT_RATIO(60),
        borderWidth: 1,
        borderColor: WHITE,
        borderRadius: ASPECT_RATIO(60)/2
    },
    text: {
        fontSize: 16,
        color: WHITE
    }
});