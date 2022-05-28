import {StyleSheet, Dimensions, Platform} from "react-native"
import {
    BACKGROUNDCOLOR,
    LIGHT_GRAY,
    PURPLE,
    RED,
    LIGHT_BLACK,
    WHITE, BLACK
} from "./colors"

let dimesions = Dimensions.get('window')

export const SCREEN_WIDTH = dimesions.width
export const SCREEN_HEIGHT = dimesions.height

export const ASPECT_RATIO = (value: number) => (value * SCREEN_HEIGHT) / 812


export const font = {
    small: 13,
    medium: 16,
    large: 18,
    extraLarge: 25,
    extraSuperLarge: 30
}

enum fontSize {ultralight = "200", light = "400", 
                medium = "600", bold = "800"}

// export const fontSize = {
//     ultralight: "200",
//     light: "400",
//     medium: "600",
//     bold: "800"
// }

export const fontStyle = {
    smallBoldGrayText: {
        fontSize: font.small,
        fontWeight: fontSize.medium,
        color: LIGHT_GRAY
    },
    smallRedText: {
        fontSize: font.small,
        fontWeight: fontSize.light,
        color: RED
    },
    mediumBlackText: {
        fontSize: font.medium,
        fontWeight: fontSize.light,
        color: BLACK
    },
    mediumBoldBlackText: {
        fontSize: font.medium,
        fontWeight: fontSize.bold,
        color: BLACK
    },
    mediumWhiteText: {
        fontSize: font.medium,
        fontWeight: fontSize.medium,
        color: WHITE
    },
    mediumBoldRedText: {
        fontSize: font.medium,
        fontWeight: fontSize.bold,
        color: RED
    },
    mediumRedText: {
        fontSize: font.medium,
        fontWeight: fontSize.medium,
        color: RED
    },
    mediumGrayText: {
        fontSize: font.medium,
        fontWeight: fontSize.light,
        color: LIGHT_GRAY
    },
    mediumBoldGrayText: {
        fontSize: font.medium,
        fontWeight: fontSize.medium,
        color: LIGHT_GRAY
    },
    largeBlackText: {
        fontSize: font.large,
        fontWeight: fontSize.light,
        color: BLACK
    },
    largeGrayText: {
        fontSize: font.large,
        fontWeight: fontSize.light,
        color: LIGHT_GRAY
    },
    largeBoldGrayText: {
        fontSize: font.large,
        fontWeight: fontSize.bold,
        color: LIGHT_GRAY
    },
    largeBoldBlackText: {
        fontSize: font.large,
        fontWeight: fontSize.bold,
        color: BLACK
    },
    largeBoldRedText: {
        fontSize: font.large,
        fontWeight: fontSize.bold,
        color: RED
    },
    extraLargeBoldBlackText: {
        fontSize: font.extraLarge,
        fontWeight: fontSize.bold,
        color: BLACK
    },
}

export const shadow = (elevation: any, spread = 5, offsetX = 0, offsetY = 0) => Platform.select({
    ios: {
        shadowOffset: {
            width: offsetX,
            height: offsetY
        },
        shadowOpacity: 0.5,
        shadowRadius: spread,
        shadowColor: LIGHT_GRAY
    },
    android: {
        elevation: elevation
    }
})

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUNDCOLOR
    },
    careMatchIcon: {
        width: ASPECT_RATIO(201),
        height: ASPECT_RATIO(59)
    },
    checkRedIcon: {
        marginLeft: 5,
        fontSize: 18,
        color: RED
    },
    // Setting Screen And Component
    textTitle: {
        fontSize: font.large,
        fontWeight: fontSize.bold,
        color: BLACK
        //...fontStyle.largeBoldBlackText
    },
    rowBetweenView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: WHITE,
        ...shadow(5)
    },
    textMediumTitle: {
        ...fontStyle.mediumBlackText
    },
    textInfo: {
        marginTop: 10,
        ...fontStyle.smallBoldGrayText
    },
    columnView: {
        flexDirection: 'column',
        padding: 15,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: WHITE,
        ...shadow(5)
    }
})