import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {appStyles, shadow} from "../../../themes/styles";
import HeaderComponent from "../../../components/HeaderComponent";
import {Icon} from "native-base";
import {WHITE} from "../../../themes/colors";

class ShowMeScreen extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isMale: true,
        }
    }

    render() {
        const {isMale} = this.state;
        return (
            <View style={appStyles.container}>
                <HeaderComponent title={'Show Me'} leftPress={() => this.props.navigation.pop()}/>
                <View style={styles.mainView}>
                    <TouchableWithoutFeedback onPress={() => {
                        this.setState({isMale: true})
                    }}>
                        <View style={[styles.innerView]}>
                            <Text style={appStyles.textMediumTitle}>{'Male'}</Text>
                            {isMale && <View style={appStyles.settingInnerRightView}>
                                <Icon type='FontAwesome' name='check' style={appStyles.checkRedIcon}/>
                            </View>}
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {
                        this.setState({isMale: false})
                    }}>
                        <View style={[styles.innerView]}>
                            <Text style={appStyles.textMediumTitle}>{'Female'}</Text>
                            {!isMale && <View style={appStyles.settingInnerRightView}>
                                <Icon type='FontAwesome' name='check' style={appStyles.checkRedIcon}/>
                            </View>}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

export default ShowMeScreen;

export const styles = StyleSheet.create({
    mainView: {
        margin: 10,
        borderRadius: 5,
        backgroundColor: WHITE,
        ...shadow(5)
    },
    innerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        backgroundColor: WHITE,
    }
})