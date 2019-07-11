import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Colors, Metrics } from "../../Themes";

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
    elevation: 0,
    borderBottomWidth: 0
  },
  headerTitle: {
    color: Colors.white,
    fontFamily: "Nunito-Regular",
    textAlign: "center",
    alignSelf: "center",
    flex: 1,
    ...Metrics.text.large
  },
  tabActiveIcon: {
    height: moderateScale(15.94),
    width: moderateScale(16.91),
    marginTop: verticalScale(0.1),
    tintColor: Colors.primary
  },
  tabInactiveIcon: {
    height: moderateScale(15.94),
    width: moderateScale(16.91),
    marginTop: verticalScale(0.1),
    tintColor: Colors.dark_2
  }
});
