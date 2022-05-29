import React from 'react';
import {StyleSheet, View} from 'react-native';
import {appStyles} from "../../../themes/styles";
import { Tag } from 'native-base';
import MessageComponent from "./MessageComponent";
import FeedComponent from "./FeedComponent";
import {BACKGROUNDCOLOR, LIGHT_GRAY, RED} from "../../../themes/colors";

class ChatScreen extends React.PureComponent<any, any>
{
    render() {
        return (
            <View style={appStyles.container}>
                {/* <Tabs
                    tabContainerStyle={{borderBottomWidth: 0}}
                    tabBarUnderlineStyle={[styles.tabStyle, {height: 0}]}>
                    <Tab tabStyle={styles.tabStyle}
                         textStyle={styles.textStyle}
                         activeTextStyle={styles.activeTextStyle}
                         activeTabStyle={styles.tabStyle}
                         heading="Messages">
                        <MessageComponent navigation={this.props.navigation} />
                    </Tab>
                    <Tab tabStyle={styles.tabStyle}
                         textStyle={styles.textStyle}
                         activeTextStyle={styles.activeTextStyle}
                         activeTabStyle={styles.tabStyle}
                         heading="Feed">
                        <FeedComponent navigation={this.props.navigation}/>
                    </Tab>
                </Tabs> */}
            </View>
        );
    }
}

export default ChatScreen;

const styles = StyleSheet.create({
    tabStyle: {
        backgroundColor: BACKGROUNDCOLOR
    },
    textStyle: {
        color: LIGHT_GRAY,
        fontSize: 18,
        fontWeight: '600'
    },
    activeTextStyle: {
        color: RED,
        fontSize: 18,
        fontWeight: '600'
    }
});