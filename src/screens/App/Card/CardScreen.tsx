import React from 'react';
import {View, Button, StyleSheet, Text, Image, TouchableWithoutFeedback, Platform} from 'react-native';
import Swiper from 'react-native-deck-swiper'
import {BACKGROUNDCOLOR, BLACK, gradientBlackBackground, WHITE} from "../../../themes/colors";
import { StackHeaderProps } from 'react-navigation-stack';
import {ASPECT_RATIO, SCREEN_HEIGHT, SCREEN_WIDTH} from "../../../themes/styles";
import CardComponent from "../../../components/card/CardComponent";
import {regex} from "../../../utils/regex";
import {range} from "./dummy";
class CardScreen extends React.PureComponent<any, any>
{
    
    cardRef = [];
    swiper: any;
    constructor (props : any) {
        super(props);
        this.state = {
            cards: [],
            swipedAllCards: false,
            swipeDirection: '',
        }
    }

    componentDidMount(): void {
        setTimeout(()=> {
            this.setState({cards: [...range(0, 15)]})
        }, 1000);
    }

    onSwiped = (type : any) => {
        console.log(`on swiped ${type}`)
    };

    cardUndo = () => {
        this.swiper.swipeBackCard();
    };

    cardLeft = () => {
        this.swiper.swipeLeft()
    };

    cardRight = () => {
        this.swiper.swipeRight()
    };

    cardTop = () => {
        this.swiper.swipeTop()
    };

    cardBoost = () => {

    };

    onTapCard = (cardIndex : any, event : any) => {
        let ref = this.cardRef[cardIndex];
        if (ref) {
            let locationX = event.nativeEvent.locationX;
            if (0 < Math.round(locationX) && (SCREEN_WIDTH/2) > Math.round(locationX)) {
                //ref.onTapRightPress();
            } else if ((SCREEN_WIDTH/2) < Math.round(locationX) && Math.round(locationX) < SCREEN_WIDTH) {
                //ref.onTapLeftPress();
            }
        }
    };

    renderCard = (card : any, index : any) => {
        return <CardComponent
            //ref={ref => this.cardRef[card.id] = ref}
            navigation={this.props.navigation}
            key={index.toString()}
            card={card}/>
    };

    render() {
        const {cards} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.bottomView}>
                    <TouchableWithoutFeedback onPress={this.cardUndo}>
                        <Image resizeMode={'contain'} style={styles.rewindLogo} source={cards.length > 0
                            ? require('../../../assets/rewind.png')
                            : require('../../../assets/rewind_gray.png')} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.cardLeft}>
                        <Image resizeMode={'contain'} style={styles.likeLogo} source={cards.length > 0
                            ? require('../../../assets/nope.png')
                            : require('../../../assets/nope_gray.png')} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.cardTop}>
                        <Image resizeMode={'contain'} style={styles.rewindLogo} source={cards.length > 0
                            ? require('../../../assets/super_like.png')
                            : require('../../../assets/super_like_gray.png')} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.cardRight}>
                        <Image resizeMode={'contain'} style={styles.likeLogo} source={cards.length > 0
                            ? require('../../../assets/like.png')
                            : require('../../../assets/like_gray.png')} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.cardBoost}>
                        <Image resizeMode={'contain'} style={styles.rewindLogo} source={cards.length > 0
                            ? require('../../../assets/boost.png')
                            : require('../../../assets/boost_gray.png')} />
                    </TouchableWithoutFeedback>
                </View>
                {
                    cards.length > 0 && <Swiper
                        ref={swiper => {this.swiper = swiper}}
                        onSwipedLeft={() => this.onSwiped('left')}
                        onSwipedRight={() => this.onSwiped('right')}
                        onSwipedTop={() => this.onSwiped('top')}
                        disableBottomSwipe={true}
                        //onTapCard={this.onTapCard.bind(this)}
                        cards={cards}
                        renderCard={this.renderCard}
                        stackSize={3}
                        backgroundColor={'transparent'}
                        cardVerticalMargin={8}
                        cardHorizontalMargin={8}
                        marginBottom={cardBottom}
                        containerStyle={{flex: 1}}
                        stackSeparation={0}
                        useViewOverflow={Platform.OS === 'ios'}
                        overlayLabels={overlayLabel}
                        animateOverlayLabelsOpacity
                        animateCardOpacity
                        swipeBackCard
                    />
                }
            </View>
        );
    }
}

export default CardScreen;

const cardBottom = regex.checkNotchDevice() ? (ASPECT_RATIO(170)) : (ASPECT_RATIO(90));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUNDCOLOR
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
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    }
})

const overlayLabel = {
    left: {
        title: 'NOPE',
        style: {
            label: {
                backgroundColor: 'transparent',
                borderColor: '#FE3153',
                color: '#FE3153',
                borderWidth: 5
            },
            wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: -30
            }
        }
    },
    right: {
        title: 'LIKE',
        style: {
            label: {
                backgroundColor: 'transparent',
                borderColor: '#28E8AC',
                color: '#28E8AC',
                borderWidth: 5
            },
            wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: 30
            }
        }
    },
    top: {
        title: 'SUPER LIKE',
        style: {
            label: {
                backgroundColor: 'transparent',
                borderColor: '#08A4F2',
                color: '#08A4F2',
                borderWidth: 5
            },
            wrapper: {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
    }
}
