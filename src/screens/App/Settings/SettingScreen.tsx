import React from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import HeaderComponent from "../../../components/HeaderComponent";
import AccountSettingComponent from "../../../components/settings/AccountSettingComponent";
import {appStyles, fontStyle, shadow} from "../../../themes/styles";
import DiscoverySettingComponent from "../../../components/settings/DiscoverySettingComponent";
import CareMatchSettingComponent from "../../../components/settings/CareMatchSettingComponent";
import AppSettingComponent from "../../../components/settings/AppSettingComponent";
import ContactUsSettingComponent from "../../../components/settings/ContactUsSettingComponent";
import {BLACK, RED, WHITE} from "../../../themes/colors";

class SettingScreen extends React.Component<any, any>
{

    render() {
        return (
            <View style={appStyles.container}>
                <HeaderComponent
                  title={'Settings'}
                  leftPress={()=>this.props.navigation.pop()}/>
                <ScrollView style={styles.settingScrollView} showsVerticalScrollIndicator={false}>
                   <View style={styles.settingCardView}>
                       <View style={styles.settingCardInnerView}>
                           <Image resizeMode={'contain'} style={{width: 150, height: 30, marginBottom: 5}} source={require('./../../../assets/honest_icon_gold.png')}/>
                           <Text style={fontStyle.smallBoldGrayText}>{'Unlock our most exclusive features'}</Text>
                       </View>
                   </View>
                    <View style={styles.settingCardView}>
                        <View style={styles.settingCardInnerView}>
                            <Image resizeMode={'contain'} style={{width: 150, height: 30, marginBottom: 5}} source={require('./../../../assets/honest_icon_purple.png')}/>
                            <Text style={fontStyle.smallBoldGrayText}>{'Unlimited Likes & more!'}</Text>
                        </View>
                    </View>
                    <View style={styles.settingCardRowView}>
                        <View style={[styles.settingCardRowInnerView, {marginRight: 8}]}>
                            <Image resizeMode={'contain'} style={{width: 50, height: 50, marginBottom: 5}} source={require('./../../../assets/boost.png')}/>
                            <Text style={fontStyle.smallBoldGrayText}>{'Get Boosts'}</Text>
                        </View>
                        <View style={[styles.settingCardRowInnerView, {marginLeft: 8}]}>
                            <Image resizeMode={'contain'} style={{width: 50, height: 50, marginBottom: 5}} source={require('./../../../assets/super_like.png')}/>
                            <Text style={fontStyle.smallBoldGrayText}>{'Get Super Likes'}</Text>
                        </View>
                    </View>
                   <AccountSettingComponent navigation={this.props.navigation}/>
                   <DiscoverySettingComponent navigation={this.props.navigation}/>
                   <CareMatchSettingComponent navigation={this.props.navigation}/>
                   <AppSettingComponent navigation={this.props.navigation}/>
                   <ContactUsSettingComponent navigation={this.props.navigation}/>
                </ScrollView>
            </View>
        );
    }
}

export default SettingScreen;

export const styles = StyleSheet.create({
    settingScrollView: {
        flex: 1,
        paddingTop: 10
    },
    settingCardView: {
        padding: 10,
        paddingTop: 2,
        paddingBottom: 2,
        marginTop: 10
    },
    settingCardInnerView: {
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        ...shadow(5)
    },
    settingCardRowView: {
        padding: 10,
        paddingTop: 2,
        paddingBottom: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    settingCardRowInnerView: {
        flex: 2,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
        ...shadow(5)
    },
});