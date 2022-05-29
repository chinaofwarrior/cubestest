import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback, FlatList, Image} from 'react-native';
import Dialog, {SlideAnimation} from 'react-native-popup-dialog'
import {
    BACKGROUNDCOLOR,
    gradientBackground,
    gradientFacebookBackground,
    LIGHT_GRAY, PURPLE,
    RED,
    WHITE
} from "../../themes/colors";
import {ASPECT_RATIO, font, fontSize, fontStyle, SCREEN_WIDTH} from "../../themes/styles";
import Button from "../Button";
import {PurchaseOptions, PurchasePackage} from "./PurchaseOptions";
import PageControl from "react-native-page-control";
import LinearGradient from "react-native-linear-gradient";

class PurchasePopUpComponent extends React.Component<any, any>
{
    intervel: any;
    flatRef: any;
    constructor(props : any) {
        super(props);
        this.state = {
            data: PurchaseOptions,
            packageData: PurchasePackage,
            currentIndex: 0,
            selectedPackage: 1,
            height: 95
        }
    }

    componentWillReceiveProps(nextProps : any, nextContext : any): void {
        if (this.props.visible && this.intervel === undefined)
            this.startInterval();
    }

    startInterval() {
        this.intervel = setInterval(() => {
            if (this.flatRef) {
                const index = this.state.currentIndex + 1;
                let currentIndex = index > (this.state.data.length - 1) ? 0 : index;
                this.flatRef.scrollToIndex({index: currentIndex, animated: true});
                this.setState({currentIndex: currentIndex})
            }
        }, 2000)
    }

    clearInterval() {
        if (this.intervel)
            clearInterval(this.intervel);

        this.setState({currentIndex: 0, selectedPackage: 1});
        this.intervel = undefined
    }

    _keyExtractor = (item : any, index : any) => item.id.toString();

    _renderItem = ({item, index} : any) => {
        return (
            <TouchableWithoutFeedback onPress={() => {
                this.clearInterval();
                this.props.onDismiss();
            }}>
                <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 0, y: 0}}
                    colors={item.backgroundColor}
                    style={styles.sliderInnerView}>
                    <View style={{...styles.sliderInnerView, marginBottom: ASPECT_RATIO(40), justifyContent: 'space-around'}}>
                        <Text style={styles.textHeaderTitle}>{item.headerTitle}</Text>
                        <Image style={styles.imageIcon} source={require('./../../assets/super_like.png')}/>
                        <View>
                            <Text style={styles.textTitle}>{item.title}</Text>
                            <Text style={styles.textSubTitle}>{item.sub_title}</Text>
                        </View>
                    </View>
                </LinearGradient>
            </TouchableWithoutFeedback>
        )
    };

    _keyPackageExtractor = (item : any, index : any) => index.toString();

    _renderPackageItem = ({item, index} : any) => {
        const {selectedPackage} = this.state;
        return (
            <TouchableWithoutFeedback onPress={()=>this.setState({selectedPackage: index})}>
                <View style={selectedPackage === index ? [styles.activePackageView, {height: this.state.height}] : [styles.inactivePackageView, {height: this.state.height}]}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={selectedPackage === index ? styles.activeTextDigitMonth : styles.inactiveTextDigitMonth}>{item.months}</Text>
                        <Text style={selectedPackage === index ? styles.activeTextMonths : styles.inactiveTextMonths}>{item.months > 1 ? 'months' : 'month'}</Text>
                    </View>
                    <Text style={selectedPackage === index ? styles.activeTextPrice : styles.inactiveTextPrice}>{`$ ${item.price}/mo`}</Text>
                    <Text style={selectedPackage === index ? styles.activeTextDiscount : styles.inactiveTextDiscount}>{ item.discount !== 0 ? `Save ${item.discount}%` : ''}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    };

    render() {
        const {data, currentIndex, packageData, selectedPackage} = this.state;
        return (
            <Dialog onDismiss={() => {
                this.clearInterval();
                this.props.onDismiss();
            }} onTouchOutside={() => {
                this.clearInterval();
                this.props.onTouchOutside();
            }}
                    visible={this.props.visible}
                    overlayOpacity={0.8}
                    dialogStyle={{backgroundColor: 'transparent'}}
                    dialogAnimation={new SlideAnimation({slideFrom: 'bottom'})}>
                <View style={styles.container}>
                    <View style={styles.cardView}>
                        <View style={styles.cardInnerView}>
                            <View style={styles.sliderView}>
                                <FlatList
                                    ref={ref => this.flatRef = ref}
                                    data={data}
                                    extraData={data}
                                    horizontal={true}
                                    pagingEnabled={true}
                                    bounces={false}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={this._keyExtractor}
                                    renderItem={this._renderItem}
                                />
                                <PageControl
                                    style={{bottom: ASPECT_RATIO(20), position: 'absolute'}}
                                    numberOfPages={data.length}
                                    currentPage={currentIndex}
                                    hidesForSinglePage
                                    pageIndicatorTintColor='transparent'
                                    currentPageIndicatorTintColor={WHITE}
                                    indicatorStyle={{borderRadius: 10, borderWidth: 1, borderColor: WHITE}}
                                    currentIndicatorStyle={{borderRadius: 10}}
                                    indicatorSize={{width: 12, height: 12}}
                                    onPageIndicatorPress={() => {
                                    }}
                                />
                            </View>
                            <View style={styles.purchaseView}
                                  onLayout={(event) => {this.setState({height: event.nativeEvent.layout.height})}}>
                                <FlatList
                                    data={packageData}
                                    extraData={[packageData, selectedPackage]}
                                    scrollEnabled={false}
                                    numColumns={3}
                                    keyExtractor={this._keyPackageExtractor}
                                    renderItem={this._renderPackageItem}
                                />
                            </View>
                        </View>
                        <Button
                            title={'CONTINUE'}
                            containerStyle={styles.buttonView}
                            colors={gradientFacebookBackground}
                            textStyle={{fontWeight: '400'}}
                            onPress={() => {
                            }}
                        />
                    </View>
                    <Text style={styles.textTitleInfo}>Recurring billing, cancel anytime</Text>
                    <Text style={styles.textDescInfo}>It is a long established fact that a reader will be distracted by
                        the readable content of a
                        page when looking at its layout. It is a long established fact that a reader will be distracted
                        by
                        the readable content of a
                        page when looking at its layout.</Text>
                </View>
            </Dialog>
        );
    }
}

export default PurchasePopUpComponent;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'transparent'
    },
    cardView: {
        flex: 1,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: WHITE,
        overflow: 'hidden'
    },
    cardInnerView: {
        flex: 1,
        backgroundColor: RED
    },
    sliderView: {
        flex: 4,
        backgroundColor: WHITE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderInnerView: {
        flex: 1,
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        width: SCREEN_WIDTH - 20,
    },
    textHeaderTitle: {
        fontSize: ASPECT_RATIO(font.extraSuperLarge),
        fontWeight: fontSize.bold,
        color: WHITE,
        textAlign: 'center'
    },
    imageIcon: {
        width: ASPECT_RATIO(110),
        height: ASPECT_RATIO(110),
        borderRadius: ASPECT_RATIO(110) / 2
    },
    textTitle: {
        fontSize: ASPECT_RATIO(font.large),
        fontWeight: fontSize.bold,
        color: WHITE,
        textAlign: 'center'
    },
    textSubTitle: {
        fontSize: ASPECT_RATIO(font.medium),
        fontWeight: fontSize.light,
        color: WHITE,
        textAlign: 'center'
    },
    purchaseView: {
        flex: 2,
        backgroundColor: BACKGROUNDCOLOR,
    },
    inactivePackageView: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        // height: ASPECT_RATIO(170)
    },
    inactiveTextDigitMonth: {
        fontSize: ASPECT_RATIO(font.extraSuperLarge),
        fontWeight: fontSize.medium,
        color: LIGHT_GRAY,
    },
    inactiveTextMonths: {
        fontSize: ASPECT_RATIO(font.large),
        fontWeight: fontSize.medium,
        color: LIGHT_GRAY,
    },
    inactiveTextPrice: {
        fontSize: ASPECT_RATIO(font.large),
        fontWeight: fontSize.medium,
        color: LIGHT_GRAY,
    },
    inactiveTextDiscount: {
        fontSize: ASPECT_RATIO(font.small),
        fontWeight: fontSize.light,
        color: LIGHT_GRAY,
    },
    activePackageView: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        // height: ASPECT_RATIO(170),
        borderWidth: 2,
        borderColor: PURPLE,
        backgroundColor: WHITE
    },
    activeTextDigitMonth: {
        fontSize: ASPECT_RATIO(font.extraSuperLarge),
        fontWeight: fontSize.medium,
        color: PURPLE,
    },
    activeTextMonths: {
        fontSize: ASPECT_RATIO(font.large),
        fontWeight: fontSize.medium,
        color: PURPLE,
    },
    activeTextPrice: {
        fontSize: ASPECT_RATIO(font.large),
        fontWeight: fontSize.medium,
        color: PURPLE,
    },
    activeTextDiscount: {
        fontSize: ASPECT_RATIO(font.small),
        fontWeight: fontSize.light,
        color: PURPLE,
    },
    buttonView: {
        margin: ASPECT_RATIO(25),
        marginLeft: ASPECT_RATIO(50),
        marginRight: ASPECT_RATIO(50),
    },
    textTitleInfo: {
        fontSize: font.medium,
        fontWeight: fontSize.medium,
        color: WHITE,
        textAlign: 'center'
    },
    textDescInfo: {
        fontSize: font.medium,
        fontWeight: fontSize.medium,
        color: LIGHT_GRAY,
        textAlign: 'center'
    }
});