import React from 'react'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {gradientBackground} from '../themes/colors';

class GradientBackground extends React.PureComponent
{

    render() {
        const { container } = styles;
        return (
            <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}
                colors={gradientBackground}
                style={container} />
        );
    }
}

export default GradientBackground;

const styles = StyleSheet.create({
   container: {
       position: 'absolute',
       top: 0,
       bottom: 0,
       right: 0,
       left: 0,
       backgroundColor: 'red'
   }
});