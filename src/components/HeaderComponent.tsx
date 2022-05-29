import React from 'react';
import {View, Text} from 'react-native';
import {VStack, HStack, Box, Center, Button, Icon, Actionsheet, useDisclose , Container} from "native-base";

import {fontStyle} from "../themes/styles";

class HeaderComponent extends React.PureComponent<any, any> {

    render() {
        return (
            <View>
                <HStack >
                    <Center>
                        <Button transparent onPress={this.props.leftPress}>
                            <Icon type={"Ionicons"} name='arrow-back' style={{color:'#000'}} />
                        </Button>
                    </Center>
                    <Box>
                        <Text
                            style={[fontStyle.mediumBoldBlackText,{textAlign: 'center'}]}>
                            {this.props.title}
                        </Text>
                    </Box>
                </HStack>
            </View>
        );
    }
}

export default HeaderComponent;
