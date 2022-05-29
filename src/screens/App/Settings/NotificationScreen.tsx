import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import {appStyles, fontStyle, shadow} from "../../../themes/styles";
import HeaderComponent from "../../../components/HeaderComponent";
import {WHITE} from "../../../themes/colors";

class NotificationScreen extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);
        this.state = {
            isNewMatches: true,
            isMessages: true,
            isMessagesLike: true,
            isSuperLikes: true,
            isTopPicks: true,
        }
    }

    render() {
        const { isNewMatches, isMessages, isMessagesLike, isSuperLikes, isTopPicks } = this.state;
        return (
            <View style={appStyles.container}>
                <HeaderComponent
                    title={'Push notifications'}
                    leftPress={()=>this.props.navigation.pop()}
                />
                <View style={styles.mainView}>
                    <View style={styles.mainView}>
                        <View style={styles.notificationInnerView}>
                            <View style={{flex: 1}}>
                                <Text style={styles.notificationTitle}>New matches</Text>
                                <Text style={styles.notificationSubTitle}>You just got a new match</Text>
                            </View>
                            <Switch
                                value={isNewMatches}
                                onValueChange={isNewMatches=>{this.setState({isNewMatches})}}/>
                        </View>
                        <View style={styles.notificationInnerView}>
                            <View style={{flex: 1}}>
                                <Text style={styles.notificationTitle}>Messages</Text>
                                <Text style={styles.notificationSubTitle}>Someone sent you a new message</Text>
                            </View>
                            <Switch
                                value={isMessages}
                                onValueChange={isMessages=>{this.setState({isMessages})}}/>
                        </View>
                        <View style={styles.notificationInnerView}>
                            <View style={{flex: 1}}>
                                <Text style={styles.notificationTitle}>Message likes</Text>
                                <Text style={styles.notificationSubTitle}>Someone liked your message</Text>
                            </View>
                            <Switch
                                value={isMessagesLike}
                                onValueChange={isMessagesLike=>{this.setState({isMessagesLike})}}/>
                        </View>
                        <View style={styles.notificationInnerView}>
                            <View style={{flex: 1}}>
                                <Text style={styles.notificationTitle}>Super Likes</Text>
                                <Text style={styles.notificationSubTitle}>You've been Super Liked! Swipe to found out by whom.</Text>
                            </View>
                            <Switch
                                value={isSuperLikes}
                                onValueChange={isSuperLikes=>{this.setState({isSuperLikes})}}/>
                        </View>
                        <View style={styles.notificationInnerView}>
                            <View style={{flex: 1}}>
                                <Text style={styles.notificationTitle}>Top Picks</Text>
                                <Text style={styles.notificationSubTitle}>You daily Top Picks are ready!</Text>
                            </View>
                            <Switch
                                value={isTopPicks}
                                onValueChange={isTopPicks=>{this.setState({isTopPicks})}}/>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default NotificationScreen;

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
        alignItems: 'center'
    },
    notificationTitle: {
        ...fontStyle.mediumBlackText
    },
    notificationSubTitle: {
        ...fontStyle.smallBoldGrayText
    },
})