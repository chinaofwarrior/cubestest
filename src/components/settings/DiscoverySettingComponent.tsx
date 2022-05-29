import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {appStyles, font, fontSize, fontStyle} from "../../themes/styles";
import {PURPLE} from "../../themes/colors";

class DiscoverySettingComponent extends React.PureComponent<any, any> {

    render() {

        return (
            <View style={{padding: 10}}>
                <Text style={fontStyle.largeBoldBlackText}>{'Discovery Settings'}</Text>
                <View style={appStyles.rowBetweenView}>
                    <Text style={appStyles.textMediumTitle}>{'Swiping in'}</Text>
                    <Text style={styles.settingInnerRightLocationTitle}>{'My Current Location'}</Text>
                </View>
                <Text style={appStyles.textInfo}>Change your swipe location to see CareMatch members in other cities.</Text>
            </View>
        );
    }
}

export default DiscoverySettingComponent;

export const styles = StyleSheet.create({
    settingInnerRightLocationTitle: {
        fontSize: font.medium,
        color: PURPLE,
        fontWeight: fontSize.medium
    },
});