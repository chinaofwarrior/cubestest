import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {appStyles, fontStyle, shadow} from "../../../themes/styles";
import HeaderComponent from "../../../components/HeaderComponent";
import {WHITE} from "../../../themes/colors";

class EmailScreen extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);
        this.state = {
            email: ''
        }
    }

    render() {
        const { email } = this.state;
        return (
            <View style={appStyles.container}>
                <HeaderComponent
                    title={'Email'}
                    leftPress={()=>this.props.navigation.pop()}
                />
                <View>
                    <Text style={styles.textInfo}>{'Control the emails you want to get - all of them, just the important stuff or the bare minimum.'}</Text>
                    <View style={styles.textInputView}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'Email Address'}
                            editable={true}
                            maxLength={50}
                            onChangeText={(email) => this.setState({email})}
                            value={email}
                        />
                    </View>
                    <View style={styles.verificationView}>
                        <Text style={fontStyle.mediumRedText}>SEND VERIFICATION EMAIL</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default EmailScreen;

export const styles = StyleSheet.create({
   textInfo: {
       ...appStyles.textInfo,
       margin: 10
   },
   textInputView: {
       padding: 10,
       paddingTop: 15,
       paddingBottom: 15,
       marginTop: 5,
       backgroundColor: WHITE,
       justifyContent: 'center',
       ...shadow(5)
   },
   textInput: {
       fontSize: 16
   },
   verificationView: {
       marginTop: 70,
       paddingTop: 15,
       paddingBottom: 15,
       backgroundColor: WHITE,
       justifyContent: 'center',
       alignItems: 'center',
       ...shadow(5)
   }
});