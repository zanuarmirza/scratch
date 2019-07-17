import React from "react";
import { View, Platform } from "react-native";
import RNMaterialShadows from "react-native-material-shadows";

const ShadowView = props => {
  const {
    width,
    padding,
    elevation,
    height,
    offsetx,
    offsety,
    RNMSProps,
    viewStyle
  } = props;
  if (Platform.OS == "android") {
    return (
      <RNMaterialShadows
        {...RNMSProps}
        shadowOffsetY={offsety}
        shadowOffsetX={offsetx}
        padding={padding}
        style={{ width: width + elevation * 2, height }}
      >
        <View
          style={{
            width,
            height,
            backgroundColor: "white",
            borderRadius: 8,
            overflow: "hidden",
            elevation,
            ...viewStyle
          }}
        >
          {props.children}
        </View>
      </RNMaterialShadows>
    );
  }
  return (
    <View
      style={{
        width,
        height,
        backgroundColor: "white",
        borderRadius: 8,
        overflow: "hidden",
        elevation,
        ...viewStyle
      }}
    >
      {props.children}
    </View>
  );
};
export default ShadowView;
