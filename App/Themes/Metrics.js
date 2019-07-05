import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 8,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
  text: {
    xlarge: {
      fontSize: 24,
      lineHeight: 32,
    },
    large: {
      fontSize: 20,
      lineHeight: 32,
    },
    medium: {
      fontSize: 16,
      lineHeight: 32,
    },
    small: {
      fontSize: 14,
      lineHeight: 22,
    },
    xsmall: {
      fontSize: 12,
      lineHeight: 16,
    },
  },
  opacity: {
    opacity_4: 0.4,
  },
};

export default metrics;
