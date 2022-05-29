import React from 'react';
import {appStyles, ASPECT_RATIO, fontStyle, SCREEN_WIDTH, shadow} from "../../../themes/styles";
import {
    Animated,
    Platform,
    Text,
    TouchableWithoutFeedback,
    View,
    Image,
    StyleSheet,
    SafeAreaView
} from "react-native";
import {BACKGROUNDCOLOR, BLACK, WHITE} from "../../../themes/colors";

const IMAGE_HEIGHT = 250;
const HEADER_HEIGHT = Platform.OS === "ios" ? 64 : 50;
const SCROLL_HEIGHT = IMAGE_HEIGHT - HEADER_HEIGHT;
const THEME_COLOR = "rgba(85,186,255, 1)";
const FADED_THEME_COLOR = "rgba(85,186,255, 0.8)";

class CardInfoScreen extends React.Component<any, any> {
    nScroll = new Animated.Value(0);
    scroll = new Animated.Value(0);
    textColor = this.scroll.interpolate({
        inputRange: [0, SCROLL_HEIGHT / 5, SCROLL_HEIGHT],
        outputRange: [THEME_COLOR, FADED_THEME_COLOR, "white"],
        extrapolate: "clamp"
    });
    imgScale = this.nScroll.interpolate({
        inputRange: [-25, 0],
        outputRange: [1.1, 1],
        extrapolateRight: "clamp"
    });

    constructor(props : any) {
        super(props);
        this.state = {
            currentIndex: 0
        };
        this.nScroll.addListener(Animated.event([{value: this.scroll}], {useNativeDriver: false}));
    }

    onTapLeftPress = () => {
        const {currentIndex} = this.state;
        const {images} = this.props.navigation.state.params.item;
        if (currentIndex < images.length - 1) {
            let newIndex = currentIndex + 1;
            this.setState({currentIndex: newIndex});
        }
    };

    onTapRightPress = () => {
        const {currentIndex} = this.state;
        if (currentIndex !== 0) {
            let newIndex = currentIndex - 1;
            this.setState({currentIndex: newIndex});
        }
    };

    renderBackground = () => {
        const {images} = this.props.navigation.state.params.item;
        const {currentIndex} = this.state;
        const width = (SCREEN_WIDTH - 20 - (4 * images.length)) / images.length;
        return (
            <View style={styles.imageView}>
                <Image style={styles.imageView} source={{uri: images[currentIndex].image}}/>
                <View style={styles.imageIndicatorView}>
                    {
                        images.length > 1 && images.map((item : any, index : any) => {
                            return (<View key={index.toString()} style={[styles.indicatorView, {
                                backgroundColor: currentIndex === index ? '#FFFFFF' : '#00000070',
                                width: width
                            }]}/>)
                        })
                    }
                </View>
                <View style={styles.tapView}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <TouchableWithoutFeedback onPress={() => this.onTapRightPress()}>
                            <View style={{flex: 2}}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.onTapLeftPress()}>
                            <View style={{flex: 2}}/>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        )
    };

    render() {
        const {username, age, education, distance, images} = this.props.navigation.state.params.item;
        return (
            <View style={appStyles.container}>
                <Animated.ScrollView
                    scrollEventThrottle={5}
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.nScroll}}}], {useNativeDriver: true})}
                    style={{zIndex: 0}}>
                    <Animated.View
                        style={{transform: [{translateY: Animated.multiply(this.nScroll, 0.65)}, {scale: this.imgScale}]}}>
                        {this.renderBackground()}
                    </Animated.View>
                    <View style={styles.foregroundView}>
                        <View style={styles.userInfoView}>
                            <View style={styles.nameView}>
                                <Text style={styles.textName}>{username},</Text>
                                <Text style={styles.textAge}>{age}</Text>
                            </View>
                            <View style={styles.textView}>
                                <Image resizeMode={'contain'} style={styles.smallIcon}
                                       source={require('../../../assets/education_black.png')}/>
                                <Text style={styles.textInfo}>{education}</Text>
                            </View>
                            <View style={styles.textView}>
                                <Image resizeMode={'contain'} style={styles.smallIcon}
                                       source={require('../../../assets/location_black.png')}/>
                                <Text style={styles.textInfo}>{distance}</Text>
                            </View>
                        </View>
                        <View style={styles.textBioView}>
                            <Text style={styles.textBio}>{'Live is too short to be serious for, carpe diem...'}</Text>
                        </View>
                        <View style={[styles.textBioView, {alignItems: 'center'}]}>
                            <Text style={styles.textShare}>{`SHARE ${username.toUpperCase()}'S PROFILE`}</Text>
                            <Text style={styles.textThink}>{`SEE WHAT A FRIEND THINKS`}</Text>
                        </View>
                        <View style={[styles.textBioView, {alignItems: 'center', borderBottomWidth: 1}]}>
                            <Text style={styles.textReport}>{`REPORT ${username.toUpperCase()}`}</Text>
                        </View>
                    </View>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.pop()}>
                        <Image resizeMode={'contain'} style={styles.backButtonView}
                               source={require('../../../assets/down_arrow.png')}/>
                    </TouchableWithoutFeedback>
                </Animated.ScrollView>
                <SafeAreaView style={styles.bottomView}>
                    <TouchableWithoutFeedback>
                        <Image resizeMode={'contain'} style={styles.rewindLogo}
                                // test png.
                               source={require('../../../assets/like.png')}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Image resizeMode={'contain'} style={styles.likeLogo}
                               source={require('../../../assets/nope.png')}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Image resizeMode={'contain'} style={styles.rewindLogo}
                               source={require('../../../assets/super_like.png')}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Image resizeMode={'contain'} style={styles.likeLogo}
                               source={require('../../../assets/like.png')}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Image resizeMode={'contain'} style={styles.rewindLogo}
                                // test png.
                               source={require('../../../assets/like.png')}/>
                    </TouchableWithoutFeedback>
                </SafeAreaView>
            </View>
        );
    }
}

export default CardInfoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUNDCOLOR
    },
    imageView: {
        width: SCREEN_WIDTH,
        height: ASPECT_RATIO(450)
    },
    imageIndicatorView: {
        position: 'absolute',
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center'
    },
    indicatorView: {
        height: 4,
        borderRadius: 2,
        marginLeft: 2,
        marginRight: 2
    },
    tapView: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'transparent'
    },
    foregroundView: {
        paddingBottom: ASPECT_RATIO(130),
        backgroundColor: BACKGROUNDCOLOR
    },
    userInfoView: {
        paddingLeft: 10,
        paddingRight: 10
    },
    nameView: {
        flexDirection: 'row',
        marginTop: ASPECT_RATIO(10),
        alignItems: 'center',
        marginBottom: ASPECT_RATIO(10),
    },
    textName: {
        fontSize: ASPECT_RATIO(35),
        fontWeight: '600'
    },
    textAge: {
        fontSize: ASPECT_RATIO(25),
        fontWeight: '200',
        marginLeft: ASPECT_RATIO(8)
    },
    textView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: ASPECT_RATIO(10),
    },
    textBioView: {
        marginTop: ASPECT_RATIO(10),
        borderTopWidth: 1,
        borderColor: 'lightgray',
        paddingLeft: 5,
        paddingRight: 10,
        paddingBottom: ASPECT_RATIO(15),
        paddingTop: ASPECT_RATIO(15)
    },
    textBio: {
        marginLeft: 5,
        ...fontStyle.largeGrayText
    },
    textShare: {
        ...fontStyle.largeBoldRedText
    },
    textThink: {
        ...fontStyle.smallRedText,
    },
    textReport: {
        ...fontStyle.mediumBoldGrayText
    },
    backButtonView: {
        width: ASPECT_RATIO(70),
        height: ASPECT_RATIO(70),
        borderRadius: ASPECT_RATIO(70) / 2,
        position: 'absolute',
        right: 10,
        top: ASPECT_RATIO(450) - ASPECT_RATIO(70) / 2,
        ...shadow(5)
    },
    textInfo: {
        marginLeft: 5,
        fontSize: ASPECT_RATIO(18),
        color: BLACK
    },
    smallIcon: {
        width: 20,
        height: 20
    },
    rewindLogo: {
        width: 44,
        height: 44
    },
    likeLogo: {
        width: 65,
        height: 65
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        width: SCREEN_WIDTH,
        paddingRight: 8,
        paddingLeft: 8,
        height: ASPECT_RATIO(100),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: ASPECT_RATIO(10),
        marginTop: ASPECT_RATIO(10),
        backgroundColor: 'transparent'
    }
});