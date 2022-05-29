import {
  Animated,
  Text,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {appStyles, ASPECT_RATIO, fontStyle, shadow} from '../../themes/styles';
import HeaderComponent from '../../components/HeaderComponent';
import {Button} from 'native-base';
import {ICONBACKGROUNDCOLOR} from '../../themes/colors';

const CELL_SIZE = ASPECT_RATIO(70);
const CELL_BORDER_RADIUS = ASPECT_RATIO(8);
const DEFAULT_CELL_BG_COLOR = '#fff';
const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const {Value, Text: AnimatedText} = Animated;

const CELL_COUNT = 4;

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({hasValue, index, isFocused}: any) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      //duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const PhoneVerificationCodeScreen = ({navigation}: any) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({index, symbol, isFocused}: any) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  const onPress = () => {
    if (value !== '1234') {
      return Alert.alert(
        'Confirmation Code',
        'Code not match! Try 1234',
        [{text: 'OK'}],
        {cancelable: false},
      );
    }

    navigation.navigate('Location');
  };

  let data = navigation.state.params.data;
  return (
    <View style={appStyles.container}>
      <HeaderComponent
        transparent={true}
        leftPress={() => navigation.goBack()}
      />
      <View style={styles.mainView}>
        <Text style={styles.textTitle}>My code is</Text>
        <View style={styles.phoneView}>
          <Text
            style={
              styles.textPhone
            }>{`+${data.callingCode} ${data.phone_number}`}</Text>
          <Text style={styles.textResend}>RESEND</Text>
        </View>
      </View>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
      <Button onPress={onPress} style={styles.button} full rounded={'none'}>
        <Text style={styles.textContinue}>CONTINUE</Text>
      </Button>
    </View>
  );
};

export default PhoneVerificationCodeScreen;

const styles = StyleSheet.create({
  mainView: {
    marginLeft: 25,
    marginRight: 25,
  },
  textTitle: {
    marginTop: 25,
    ...fontStyle.extraLargeBoldBlackText,
  },
  phoneView: {
    marginTop: 8,
    flexDirection: 'row',
  },
  textPhone: {
    ...fontStyle.largeBoldGrayText,
  },
  textResend: {
    marginLeft: 15,
    ...fontStyle.largeBoldBlackText,
  },
  button: {
    marginTop: 50,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: ASPECT_RATIO(350),
    backgroundColor: ICONBACKGROUNDCOLOR,
    ...shadow(5),
  },
  textContinue: {
    ...fontStyle.mediumBoldGrayText,
  },
  codeFiledRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: '#3759b8',
    backgroundColor: '#fff',

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },
});
