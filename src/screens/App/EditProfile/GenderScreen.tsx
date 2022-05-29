import React from 'react';
import {View, Text, Switch, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {appStyles, fontStyle, shadow} from "../../../themes/styles";
import HeaderComponent from "../../../components/HeaderComponent";
import {Icon} from "native-base";
import {WHITE} from "../../../themes/colors";

class GenderScreen extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);
        this.state = {
            gender: 0,
            showMeGender: false
        }
    }

    render() {
        const { gender, showMeGender } = this.state;
        return (
            <View style={appStyles.container}>
                <HeaderComponent
                    title={'I am'}
                    leftPress={()=>this.props.navigation.pop()}
                />
                <View style={styles.mainView}>
                    <TouchableWithoutFeedback onPress={()=>this.setState({gender:0})}>
                        <View style={styles.notificationInnerView}>
                            <View style={{flex: 1}}>
                                <Text style={styles.notificationTitle}>Men</Text>
                            </View>
                            {gender === 0 && <View style={appStyles.settingInnerRightView}>
                                <Icon type='FontAwesome' name='check' style={appStyles.checkRedIcon}/>
                            </View>}
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>this.setState({gender:1})}>
                        <View style={styles.notificationInnerView}>
                            <View style={{flex: 1}}>
                                <Text style={styles.notificationTitle}>Female</Text>
                            </View>
                            {gender === 1 && <View style={appStyles.settingInnerRightView}>
                                <Icon type='FontAwesome' name='check' style={appStyles.checkRedIcon}/>
                            </View>}
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>this.setState({gender:2})}>
                        <View style={styles.notificationInnerView}>
                            <View style={{flex: 1}}>
                                <Text style={styles.notificationTitle}>More</Text>
                            </View>
                            {gender === 2 && <View style={appStyles.settingInnerRightView}>
                                <Icon type='FontAwesome' name='check' style={appStyles.checkRedIcon}/>
                            </View>}
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={[styles.notificationInnerView, {marginTop: 25}]}>
                        <View style={{flex: 1}}>
                            <Text style={styles.notificationTitle}>Show my gender on my profile</Text>
                        </View>
                        <Switch
                            value={showMeGender}
                            onValueChange={showMeGender=>{this.setState({showMeGender})}}/>
                    </View>
                </View>
            </View>
        );
    }
}

export default GenderScreen;

export const styles = StyleSheet.create({
    mainView: {
        marginTop: 10,
        ...shadow(5)
    },
    notificationInnerView: {
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 1,
        backgroundColor: WHITE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...shadow(5)
    },
    notificationTitle: {
        ...fontStyle.mediumBlackText
    },
    notificationSubTitle: {
        ...fontStyle.smallBoldGrayText
    },
});