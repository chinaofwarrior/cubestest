import React from "react";
import {Bubble, GiftedChat} from "react-native-gifted-chat/lib/index";
import {View, SafeAreaView} from "react-native";
//import {Body, Button, Header, Icon, Left, Right, Title} from "native-base";
import {appStyles} from "../../../themes/styles";
import {PURPLE, RED, WHITE} from "../../../themes/colors";
import HeaderComponent from "../../../components/HeaderComponent";

class MessageScreen extends React.Component<any, any> {

    constructor(props: any)
    {
        super(props);
        this.state = {
            messages: []
        };
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: "Hello developer",
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: "React Native",
                        avatar: "https://placeimg.com/140/140/any"
                    }
                }
            ]
        });
    }

    onSend(messages = []) {
        const { navigation } = this.props;
        const item = navigation.state.params.item;

        let newItem = messages[0];
        let newMessage: any = Object.assign({}, newItem);
        newMessage.user.avatar = item.profile;

        this.setState((previousState: any) => ({
            messages: GiftedChat.append(previousState.messages, newMessage)
        }));
    }

    render() {
        const { navigation } = this.props;
        const item = navigation.state.params.item;
        return (
            <View style={appStyles.container}>
                <HeaderComponent
                    title={item.name}
                    leftPress={()=>this.props.navigation.pop()}/>
                <SafeAreaView style={{flex: 1}}>
                    <GiftedChat
                        messages={this.state.messages}
                        onSend={(messages: any) => this.onSend(messages)}
                        user={{_id: 1}}
                        renderBubble={(props: any) => {
                           return (
                               <Bubble
                                   {...props}
                                //    wrapperStyle={{
                                //       right: {
                                //           backgroundColor: RED
                                //       }
                                //    }}
                               />
                           )
                        }}
                    />
                </SafeAreaView>
            </View>
        );
    }
}

export default MessageScreen;