import React from 'react';
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableNativeFeedback, Platform } from 'react-native';
import FastImage from 'react-native-fast-image'
import LinearGradient from "react-native-linear-gradient";
import { BACKGROUNDCOLOR, BLACK, gradientBlackBackground, WHITE } from "../../themes/colors";
import { SCREEN_WIDTH } from "../../themes/styles";

const TouchableView = Platform.OS === 'ios' ? TouchableWithoutFeedback : TouchableNativeFeedback

class CardComponent extends React.PureComponent<any, any>
{
    constructor(props: any) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }

    onTapLeftPress = () => {
        const { currentIndex } = this.state;
        const { images } = this.props.card;
        if (currentIndex < images.length - 1) {
            let newIndex = currentIndex + 1;
            this.setState({ currentIndex: newIndex });
        }
    };

    onTapRightPress = () => {
        const { currentIndex } = this.state;
        if (currentIndex !== 0) {
            let newIndex = currentIndex - 1;
            this.setState({ currentIndex: newIndex });
        }
    };

    render() {
        const { currentIndex } = this.state;
        const { username, age, education, distance, images } = this.props.card;
        const width = (SCREEN_WIDTH - 40 - (4 * images.length)) / images.length;
        return (
            <View style={styles.card}>
                <FastImage style={styles.image} source={{ uri: images[currentIndex].image }} resizeMode={FastImage.resizeMode.cover} />
                <LinearGradient
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    colors={gradientBlackBackground}
                    style={styles.image} />
                <View style={[styles.image, {
                    marginTop: 10,
                    flexDirection: 'row',
                    backgroundColor: 'transparent',
                    paddingLeft: 10,
                    paddingRight: 10,
                    justifyContent: 'center'
                }
                ]}>
                    {
                        images.length > 1 && images.map((index : number) => {
                            return (
                                <View key={index.toString()} style={{
                                    height: 4,
                                    borderRadius: 2,
                                    backgroundColor: currentIndex === index ? '#FFFFFF' : '#00000070',
                                    width: width,
                                    marginLeft: 2,
                                    marginRight: 2
                                }} />
                            )
                        })
                    }
                </View>
                <TouchableView onPress={() => { this.props.navigation.navigate('CardInfo', { item: this.props.card }) }}>
                    <View>
                        <View style={styles.cardBottomStyle}>
                            <View style={styles.textView}>
                                <Text style={styles.textTitle}>{username}</Text>
                                <Text style={styles.textAge}>{age}</Text>
                            </View>
                            <View style={styles.textView}>
                                <Image
                                    resizeMode={'contain'}
                                    style={styles.smallIcon}
                                    source={require('../../assets/education_white.png')} />
                                <Text style={styles.textInfo}>{education}</Text>
                            </View>
                            <View style={styles.textView}>
                                <Image
                                    resizeMode={'contain'}
                                    style={styles.smallIcon}
                                    source={require('../../assets/location_white.png')} />
                                <Text style={styles.textInfo}>{distance}</Text>
                            </View>
                        </View>
                        <View style={styles.viewInfo}>
                            <Image
                                resizeMode={'contain'}
                                style={styles.imageInfo}
                                source={require('../../assets/info.png')} />
                        </View>
                    </View>
                </TouchableView>
            </View>
        );
    }
}

export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUNDCOLOR
    },
    card: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: '#E8E8E8',
        justifyContent: 'flex-end',
        backgroundColor: BLACK
    },
    image: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'transparent'
    },
    viewInfo: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        alignItems: 'center',
        padding: 15,
    },
    imageInfo: {
        width: 25,
        height: 25
    },
    cardBottomStyle: {
        marginLeft: 15,
        marginRight: 55,
    },
    textView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    textTitle: {
        fontSize: 30,
        color: WHITE,
        fontWeight: '600'
    },
    textAge: {
        marginLeft: 5,
        fontSize: 25,
        color: WHITE,
    },
    textInfo: {
        marginLeft: 5,
        fontSize: 18,
        color: WHITE
    },
    smallIcon: {
        width: 20,
        height: 20
    }
});