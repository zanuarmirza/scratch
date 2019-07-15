import React from "react";
import { View, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Metrics } from "Themes";

const HeaderContainer = props => (
  <View
    style={{
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-between",
      zIndex: 9999,
      position: "absolute",
      top: moderateScale(56),
      paddingHorizontal: Metrics.marginHorizontal,
      width: Dimensions.get("window").width,
      height: 35
    }}
  >
    {props.children}
  </View>
);

export default HeaderContainer;
