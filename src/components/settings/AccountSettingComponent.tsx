import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {Icon} from "native-base";
import {appStyles, fontStyle} from "../../themes/styles";

class AccountSettingComponent extends React.PureComponent<any, any>
{

    render() {

        return (
            <View style={{padding: 10}}>
                <Text style={fontStyle.largeBoldBlackText}>{'Account Settings'}</Text>
                <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('PhoneNumber')}}>
                    <View style={appStyles.rowBetweenView}>
                        <Text style={appStyles.textMediumTitle}>{'Phone Number'}</Text>
                        <View style={styles.settingInnerRightView}>
                            <Text style={styles.settingInnerRightTitle}>{'1234567890'}</Text>
                            <Icon id='FontAwesome' name='chevron-right' style={styles.settingInnerNextIcon}/>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={appStyles.textInfo}>Verify a Phone Number to help secure your account.</Text>
            </View>
        );
    }
}

export default AccountSettingComponent;

export const styles = StyleSheet.create({
    settingInnerRightView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    settingInnerNextIcon: {
        marginLeft: 5,
        ...fontStyle.mediumGrayText
    },
    settingInnerRightTitle: {
        ...fontStyle.mediumGrayText
    },
});