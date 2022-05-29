import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import {appStyles, fontStyle, shadow} from "../../../themes/styles";
import HeaderComponent from "../../../components/HeaderComponent";
import {WHITE} from "../../../themes/colors";

class TeamScreen extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);
        this.state = {
            isTeam: true,
        }
    }

    render() {
        const { isTeam } = this.state;
        return (
            <View style={appStyles.container}>
                <HeaderComponent
                    title={'Team CareMatch'}
                    leftPress={()=>this.props.navigation.pop()}
                />
                <View style={{marginTop: 10}}>
                    <View style={styles.notificationInnerView}>
                        <View style={{flex: 1}}>
                            <Text style={styles.notificationTitle}>Team CareMatch</Text>
                            <Text style={styles.notificationSubTitle}>I want to receive news, updates and offers from CareMatch.</Text>
                        </View>
                        <Switch
                            value={isTeam}
                            onValueChange={isTeam=>{this.setState({isTeam})}}/>
                    </View>
                </View>
            </View>
        );
    }
}

export default TeamScreen;

export const styles = StyleSheet.create({
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
})