import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {fontStyle, appStyles} from "../../themes/styles";
import {RED, WHITE} from "../../themes/colors";

class AppSettingComponent extends React.PureComponent<any, any>
{
    state = {
      isKm: true
    };

    render() {
        const { isKm } = this.state;
        return (
            <View style={{padding: 10}}>
                <Text style={fontStyle.largeBoldBlackText}>{'App Settings'}</Text>
                <View style={appStyles.columnView}>
                    <Text style={fontStyle.largeBoldRedText}>{'Notifications'}</Text>
                    <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('Email')}}>
                        <View>
                            <Text style={styles.settingCareMatchInnerTitle}>{'Email'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('PushNotification')}}>
                        <View>
                            <Text style={styles.settingCareMatchInnerTitle}>{'Push notifications'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('TeamCareMatch')}}>
                        <View>
                            <Text style={styles.settingCareMatchInnerTitle}>{'Team CareMatch'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={appStyles.columnView}>
                    <View style={styles.rowView}>
                        <Text style={fontStyle.largeBoldRedText}>{'Show Distances in'}</Text>
                        <Text style={appStyles.textTitle}>{isKm ? 'Km.' : 'Mi.'}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <TouchableWithoutFeedback onPress={()=> {this.setState({isKm: true})}}>
                            <View style={isKm ? styles.activeDistanceView : styles.inactiveDistanceView}>
                                <Text style={isKm ? styles.activeDistanceTitle: styles.inactiveDistanceTitle}>{'Km.'}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=> {this.setState({isKm: false})}}>
                            <View style={!isKm ? styles.activeDistanceView : styles.inactiveDistanceView}>
                                <Text style={!isKm ? styles.activeDistanceTitle: styles.inactiveDistanceTitle}>{'Mi.'}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        );
    }
}

export default AppSettingComponent;

export const styles = StyleSheet.create({
    settingCareMatchInnerTitle: {
        marginTop: 15,
        ...fontStyle.mediumBlackText
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inactiveDistanceView: {
        width: '50%',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
    },
    inactiveDistanceTitle: {
        ...fontStyle.mediumBlackText,
        marginTop: 10,
        marginBottom: 10,
    },
    activeDistanceView: {
        width: '50%',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: RED
    },
    activeDistanceTitle: {
        ...fontStyle.mediumBlackText,
        color: WHITE,
        marginTop: 10,
        marginBottom: 10,
    }
});