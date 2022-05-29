import React from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    Switch,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';
import HeaderComponent from "../../../components/HeaderComponent";
import PhotosComponent from "../../../components/editprofile/PhotosComponent";
import {appStyles, fontStyle, shadow} from "../../../themes/styles";
import {WHITE} from "../../../themes/colors";

class EditProfileScreen extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);
        this.state = {
            bio: '',
            job_title: '',
            company: '',
            university: 'Add university',
            sex: 'Male',
        };
    }

    render() {
        const {bio, job_title, company, university, sex} = this.state;
        return (
            <View style={appStyles.container}>
                <HeaderComponent
                    title={'Edit Profile'}
                    leftPress={()=>this.props.navigation.pop()}/>
                <SafeAreaView style={{flex: 1}}>
                    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                        <PhotosComponent />
                        <View style={styles.profileSectionView}>
                            <Text style={styles.profileTitle}>{'About Jolie'}</Text>
                            <View style={styles.profileTextInputView}>
                                <TextInput
                                    style={styles.profileTextInput}
                                    multiline={true}
                                    placeholder={'Bio'}
                                    editable={true}
                                    maxLength={500}
                                    onChangeText={(bio) => this.setState({bio})}
                                    value={bio}
                                />
                            </View>
                        </View>
                        <View style={styles.profileSectionView}>
                            <Text style={styles.profileTitle}>{'Job Title'}</Text>
                            <View style={styles.profileTextInputView}>
                                <TextInput
                                    style={styles.profileTextInput}
                                    placeholder={'Add job title'}
                                    editable={true}
                                    maxLength={40}
                                    onChangeText={(job_title) => this.setState({job_title})}
                                    value={job_title}
                                />
                            </View>
                        </View>
                        <View style={styles.profileSectionView}>
                            <Text style={styles.profileTitle}>{'Company'}</Text>
                            <View style={styles.profileTextInputView}>
                                <TextInput
                                    style={styles.profileTextInput}
                                    placeholder={'Add company'}
                                    editable={true}
                                    maxLength={40}
                                    onChangeText={(company) => this.setState({company})}
                                    value={company}
                                />
                            </View>
                        </View>
                        <View style={styles.profileSectionView}>
                            <Text style={styles.profileTitle}>{'School'}</Text>
                            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('AddUniversity')}>
                                <View style={styles.profileTextInputView}>
                                    <Text style={styles.profileTextInput}>{university}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.profileSectionView}>
                            <Text style={styles.profileTitle}>{'I am'}</Text>
                            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Gender')}>
                                <View style={styles.profileTextInputView}>
                                    <Text style={styles.profileTextInput}>{sex}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.profileSectionView}>
                            <Text style={styles.profileTitle}>{'Control Your Profile'}</Text>
                            <View style={{marginTop: 10, ...shadow(5), marginBottom: 20}}>
                                <View style={styles.profileControlView}>
                                    <Text style={styles.profileTextInput}>Don't Show My Age</Text>
                                    <Switch value={false} />
                                </View>
                                <View style={styles.profileControlView}>
                                    <Text style={styles.profileTextInput}>Make My Distance Invisible</Text>
                                    <Switch value={false} />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

export default EditProfileScreen;

export const styles = StyleSheet.create({
    profileSectionView: {
        flex: 1,
        marginTop: 15
    },
    profileTitle: {
        paddingLeft: 10,
        ...fontStyle.mediumBoldBlackText
    },
    profileTextInputView: {
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 5,
        backgroundColor: WHITE,
        justifyContent: 'center',
        ...shadow(5)
    },
    profileTextInput: {
        fontSize: 16
    },
    profileControlView: {
        flex: 1,
        backgroundColor: WHITE,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});