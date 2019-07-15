import React from "react";
import { View, Image } from "react-native";
import { Colors, Images } from "Themes";
import { Text } from "Components";
import { moderateScale } from "react-native-size-matters";
import HeaderContainer from "./HeaderContainer";

const Header = props => (
  <HeaderContainer>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        resizeMode="contain"
        source={Images.backArrow}
        style={{
          tintColor: Colors.white,
          width: moderateScale(19),
          height: moderateScale(19)
        }}
      />
      <Text style={{ marginLeft: moderateScale(19), ...props.labelStyle }}>
        {props.label}
      </Text>
    </View>
  </HeaderContainer>
);

export default Header;
