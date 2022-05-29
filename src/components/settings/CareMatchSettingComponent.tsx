import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Switch,
  StyleSheet,
} from 'react-native';
import {
  appStyles,
  fontStyle,
  SCREEN_WIDTH,
} from '../../themes/styles';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {RED} from '../../themes/colors';

class CareMatchSettingComponent extends React.PureComponent<any, any> {
  state = {
    sliderOneChanging: false,
    sliderOneValue: [5],
    multiSliderValue: [24, 55],
    nonCollidingMultiSliderValue: [0, 100],
    isShowMeOnCareMatch: true,
  };

  sliderOneValuesChangeStart = () => {
    this.setState({
      sliderOneChanging: true,
    });
  };

  sliderOneValuesChange = (values : any) => {
    let newValues = [0];
    newValues[0] = values[0];
    this.setState({
      sliderOneValue: newValues,
    });
  };

  sliderOneValuesChangeFinish = () => {
    this.setState({
      sliderOneChanging: false,
    });
  };

  multiSliderValuesChange = (values : any) => {
    this.setState({
      multiSliderValue: values,
    });
  };

  render() {
    return (
      <View style={{padding: 10}}>
        <View style={appStyles.columnView}>
          <Text style={fontStyle.largeBoldRedText}>{'Show Me'}</Text>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate('ShowMe');
            }}>
            <Text style={styles.settingCareMatchInnerTitle}>{'Women'}</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={appStyles.columnView}>
          <View style={styles.maxView}>
            <Text style={fontStyle.largeBoldRedText}>{'Maximum distance'}</Text>
            <Text style={appStyles.textTitle}>{'24Km.'}</Text>
          </View>
          <MultiSlider
            containerStyle={styles.sliderContainer}
            selectedStyle={{backgroundColor: RED}}
            values={this.state.sliderOneValue}
            sliderLength={SCREEN_WIDTH - 70}
            onValuesChangeStart={this.sliderOneValuesChangeStart}
            onValuesChange={this.sliderOneValuesChange}
            onValuesChangeFinish={this.sliderOneValuesChangeFinish}
          />
        </View>
        <View style={appStyles.columnView}>
          <View style={styles.maxView}>
            <Text style={fontStyle.largeBoldRedText}>{'Age range'}</Text>
            <Text style={appStyles.textTitle}>{'18 - 24'}</Text>
          </View>
          <MultiSlider
            containerStyle={styles.sliderContainer}
            selectedStyle={{backgroundColor: RED}}
            values={[
              this.state.multiSliderValue[0],
              this.state.multiSliderValue[1],
            ]}
            sliderLength={SCREEN_WIDTH - 70}
            onValuesChange={this.multiSliderValuesChange}
            min={18}
            max={55}
            step={1}
            allowOverlap
            snapped
          />
        </View>
        <Text style={appStyles.textInfo}>
          CareMatch uses these preferences to suggest matches. Some match
          suggestions may not fail within your desired parameters.
        </Text>
        <View style={appStyles.rowBetweenView}>
          <Text style={appStyles.textMediumTitle}>
            {'Show me on CareMatch'}
          </Text>
          <Switch
            value={this.state.isShowMeOnCareMatch}
            onValueChange={(isShowMeOnCareMatch) =>
              this.setState({isShowMeOnCareMatch})
            }
          />
        </View>
        <Text style={appStyles.textInfo}>
          You won't show up in the card stack but can still message your
          existing matches.
        </Text>
        <View style={appStyles.rowBetweenView}>
          <Text style={appStyles.textMediumTitle}>{'Share my feed'}</Text>
          <View style={appStyles.settingInnerRightView} />
        </View>
        <Text style={appStyles.textInfo}>
          Sharing your social content will greatly increase your chances of
          receiving messages!
        </Text>
      </View>
    );
  }
}

export default CareMatchSettingComponent;

export const styles = StyleSheet.create({
  settingCareMatchInnerTitle: {
    marginTop: 15,
    ...fontStyle.mediumBlackText,
  },
  maxView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
});
