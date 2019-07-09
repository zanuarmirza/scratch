import { Dimensions, Platform } from "react-native";
import { moderateScale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

// Used via Metrics.baseMargin
const metrics = {
  marginVertical: 10,
  marginHorizontal: 25,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === "ios" ? 64 : 54,
  buttonRadius: 8,
  button: {
    radius: 8,
    height: {
      normal: moderateScale(50)
    }
  },
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  },
  text: {
    /**
      fontSize: 24,
      lineHeight: 32
     */
    xlarge: {
      fontSize: 24,
      lineHeight: 32
    },
    /**
      fontSize: 20,
      lineHeight: 32
     */
    large: {
      fontSize: 20,
      lineHeight: 32
    },
    /**
      fontSize: 16,
      lineHeight: 32
     */
    medium: {
      fontSize: 16,
      lineHeight: 32
    },
    /**
      fontSize: 14,
      lineHeight: 22
     */
    small: {
      fontSize: 14,
      lineHeight: 22
    },
    xsmall: {
      fontSize: 12,
      lineHeight: 16
    }
  },
  opacity: {
    opacity_4: 0.4
  },
  throttleClick: 500
};

export default metrics;
