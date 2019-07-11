import { TouchableOpacity, Text } from "Components";
import React from "react";
import { Image, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Images, Colors } from "Themes";

const BACKBUTTON = {
  width: moderateScale(7),
  height: moderateScale(3),
  marginLeft: moderateScale(4)
};

const BackButtonArrow = props => (
  <TouchableOpacity
    onPress={props.onPress}
    style={{ flex: 1, justifyContent: "center" }}
    {...props}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        resizeMode="contain"
        source={Images.left_arrow}
        style={[BACKBUTTON, props.buttonStyle]}
      />
      <Text style={{ color: Colors.dark_1, marginLeft: 6 }}>{props.label}</Text>
    </View>
  </TouchableOpacity>
);

export default BackButtonArrow;
