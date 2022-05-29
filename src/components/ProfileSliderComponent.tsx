import React from 'react';
import {FlatList, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {ASPECT_RATIO, fontStyle, SCREEN_WIDTH, shadow} from "../themes/styles";
import {Button} from 'native-base';
import {LIGHT_GRAY, RED, WHITE} from "../themes/colors";
import PageControl from 'react-native-page-control';

class ProfileSliderComponent extends React.PureComponent<any, any>
{
    flatRef: any = 0;
    componentWillReceiveProps(nextProps: any, nextContext: any): void {
        if (this.flatRef) {
            if (nextProps.currentIndex !== this.props.currentIndex)
                this.flatRef.scrollToIndex({index: nextProps.currentIndex, animated: true})
        }
    }

    _keyExtractor = (item: any, index: any) => item.id.toString();

    _renderItem = ({item, index}: any) => {
        return (
            <TouchableWithoutFeedback onPress={() => {this.props.onPress(index)}}>
                <View style={styles.profileItemView}>
                    <Text style={styles.profileTextTitle}>{item.title}</Text>
                    <Text style={styles.profileTextSubTitle}>{item.sub_title}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    };

    render() {
        const {data, currentIndex} = this.props;
        const color = currentIndex === 0 ? '#FF8C00' : RED;
        const title = currentIndex === 0 ? 'GET CAREMATCH GOLD!' : 'GET CAREMATCH PLUS!';
        return (
            <View style={styles.profileSliderInnerView}>
                <FlatList
                    ref={ref => this.flatRef = ref}
                    data={data}
                    extraData={data}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
                <View style={{marginBottom: ASPECT_RATIO(5)}}>
                    <PageControl
                        style={{marginBottom: ASPECT_RATIO(20)}}
                        numberOfPages={data.length}
                        currentPage={currentIndex}
                        hidesForSinglePage
                        pageIndicatorTintColor={LIGHT_GRAY}
                        currentPageIndicatorTintColor={RED}
                        indicatorStyle={{borderRadius: 5}}
                        currentIndicatorStyle={{borderRadius: 5}}
                        indicatorSize={{width: 8, height: 8}}
                        onPageIndicatorPress={() => {
                        }}
                    />
                    <Button
                        style={{backgroundColor: WHITE, ...shadow(5)}}
                        onPress={()=> this.props.onPress(currentIndex)}
                        rounded={'none'}>
                        <Text style={{
                            paddingRight: 25,
                            paddingLeft: 25,
                            fontSize: ASPECT_RATIO(18),
                            fontWeight: '800',
                            color: color
                        }}>{title}</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default ProfileSliderComponent;

export const styles = StyleSheet.create({
    profileSliderInnerView: {
        marginBottom: ASPECT_RATIO(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileItemView: {
        padding: 10,
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileTextTitle: {
        ...fontStyle.largeBoldBlackText
    },
    profileTextSubTitle: {
        marginTop: 3,
        textAlign: 'center',
        ...fontStyle.mediumGrayText
    }
});