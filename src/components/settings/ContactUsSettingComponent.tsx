import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import {appStyles, ASPECT_RATIO, font, fontSize, fontStyle} from "../../themes/styles";
import {LIGHT_BLACK, RED} from "../../themes/colors";
import {regex, TouchableFeedback} from "../../utils/regex";

class ContactUsSettingComponent extends React.PureComponent<any, any>
{

    render() {
        return (
            <SafeAreaView>
                <View style={{padding: 10, marginBottom: 20}}>
                    <Text style={fontStyle.largeBoldBlackText}>{'Contact Us'}</Text>
                    <View style={appStyles.columnView}>
                        <Text style={styles.helpText}>{'Help & Support'}</Text>
                    </View>
                    <View style={appStyles.columnView}>
                        <View style={styles.shareTextView}>
                            <Text style={styles.settingContactTitle}>{'Share CareMatch'}</Text>
                        </View>
                        <View style={styles.restoreTextView}>
                            <Text style={styles.settingContactTitle}>{'Restore Purchase'}</Text>
                        </View>
                    </View>
                    <View style={appStyles.columnView}>
                        <Text style={fontStyle.largeBoldRedText}>{'Legal'}</Text>
                        <View>
                            <Text style={styles.settingCareMatchInnerTitle}>{'Licenses'}</Text>
                        </View>
                        <View>
                            <Text style={styles.settingCareMatchInnerTitle}>{'Privacy Policy'}</Text>
                        </View>
                        <View>
                            <Text style={styles.settingCareMatchInnerTitle}>{'Terms of Service'}</Text>
                        </View>
                    </View>
                    <TouchableFeedback onPress={()=>regex.logout(this.props.navigation)}>
                        <View style={appStyles.columnView}>
                            <Text style={styles.helpText}>{'Logout'}</Text>
                        </View>
                    </TouchableFeedback>
                    <View style={styles.logoView}>
                        <Image resizeMode={'contain'} style={styles.logoSize} source={require('./../../assets/selected_logo.png')}/>
                        <Text>Version 1.0</Text>
                    </View>
                    <TouchableFeedback>
                        <View style={appStyles.columnView}>
                            <Text style={[styles.helpText, {color: RED}]}>{'Delete Account'}</Text>
                        </View>
                    </TouchableFeedback>
                </View>
            </SafeAreaView>
        );
    }
}

export default ContactUsSettingComponent;

export const styles = StyleSheet.create({
    helpText: {
        textAlign: 'center',
        fontSize: font.large,
        fontWeight: fontSize.medium
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    shareTextView: {
        paddingBottom: 15,
        paddingTop: 5
    },
    restoreTextView: {
        paddingBottom: 5,
    },
    settingContactTitle: {
        fontSize: 16,
        color: LIGHT_BLACK,
        fontWeight: '600'
    },
    settingCareMatchInnerTitle: {
        marginTop: 15,
        ...fontStyle.mediumBlackText
    },
    logoView: {
      marginTop: 25,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    logoSize: {
        width: ASPECT_RATIO(60),
        height: ASPECT_RATIO(77)
    }
});