import React from "react";
import { View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Colors } from "Themes";
import HeaderProfile from "./HeaderProfile";
import ProfileSection from "./ProfileSection";

const Header = props => (
  <View>
    <HeaderProfile />
    <View style={{ marginTop: moderateScale(29) }}>
      <ProfileSection profile={props.profile} />
    </View>
    <View
      style={{
        height: 1,
        backgroundColor: Colors.dark_2_opacity_5,
        marginTop: moderateScale(26)
      }}
    />
  </View>
);

export default Header;
