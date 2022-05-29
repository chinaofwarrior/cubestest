import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from "native-base";
import {appStyles, fontStyle, shadow} from "../../../themes/styles";
import {RED, WHITE} from "../../../themes/colors";
import HeaderComponent from "../../../components/HeaderComponent";


class PhoneNumberScreen extends React.PureComponent<any, any>
{

    render()
    {
        return (
            <View style={appStyles.container}>
                <HeaderComponent title={'Phone No.'} leftPress={()=>this.props.navigation.pop()}/>
                <View style={{margin: 10}}>
                    <Text style={appStyles.textTitle}>{'Phone Number'}</Text>
                    <View style={appStyles.rowBetweenView}>
                        <Text style={appStyles.textMediumTitle}>{'1234567890'}</Text>
                        <Icon type='FontAwesome' name='check' style={appStyles.checkRedIcon}/>
                    </View>
                    <Text style={appStyles.textInfo}>Verified Phone Number</Text>
                    <View style={styles.updatePhoneView}>
                        <Text style={styles.updatePhoneText}>{'Update My Phone Number'}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default PhoneNumberScreen;


export const styles = StyleSheet.create({
    updatePhoneView: {
        flexDirection: 'column',
        padding: 15,
        borderRadius: 5,
        backgroundColor: WHITE,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        ...shadow(5)
    },
    updatePhoneText: {
        ...fontStyle.mediumRedText
    }
});