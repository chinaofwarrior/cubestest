import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ASPECT_RATIO} from "../../themes/styles";
import {RED, WHITE} from "../../themes/colors";
import {Icon} from "native-base";


class GradientRoundButton extends React.PureComponent<any, any> {

    render() {
        const { container } = styles;
        const { buttonStyle, colors, containerStyle, icon } = this.props;
        return (
            <View style={containerStyle}>
                <TouchableWithoutFeedback
                    onPress={this.props.onPress}>
                    <LinearGradient
                        colors={colors}
                        start={{x: 1, y: 0}}
                        end={{x: 0, y: 0}}
                        style={[container, buttonStyle]}>
                        <Icon name={icon} style={{}} />
                    </LinearGradient>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default GradientRoundButton;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: ASPECT_RATIO(25),
        width: ASPECT_RATIO(25),
        borderRadius: ASPECT_RATIO(25)/2
    }
});

// No available options found on line 23
// style={{fontSize: ASPECT_RATIO(25), color: icon === 'add' ? WHITE : RED}}