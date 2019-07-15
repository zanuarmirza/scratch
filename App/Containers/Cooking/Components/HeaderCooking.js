import React from "react";
import { View, Image } from "react-native";
import { Colors, Images, Metrics } from "Themes";
import { Text, HeaderContainer, TouchableOpacity } from "Components";
import { moderateScale } from "react-native-size-matters";
import I18n from "I18n";
import * as lang from "I18n/languages/Type";

const Header = () => (
  <HeaderContainer>
    <TouchableOpacity
      style={{ overflow: "hidden" }}
      onPress={() => console.log("click cook mode")}
    >
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
        <Text
          style={{ marginLeft: moderateScale(5), color: Colors.white }}
          size="xsmall"
        >
          {I18n.t(lang.BACK_TO_PROFILE)}
        </Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ overflow: "hidden" }}
      onPress={() => console.log("click cook mode")}
    >
      <View
        style={{
          backgroundColor: Colors.dark_1_opacity_5,
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          borderRadius: Metrics.borderRadius.big,
          height: 30,
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderWidth: 1,
          borderColor: Colors.white
        }}
      >
        <Image
          resizeMode="contain"
          style={{ width: 19, height: 19 }}
          source={Images.playIcon}
        />
        <Text
          style={{ marginLeft: 3, color: Colors.white }}
          size="xsmall"
          weight="bold"
        >
          {I18n.t(lang.COOK_NOW)}
        </Text>
      </View>
    </TouchableOpacity>
  </HeaderContainer>
);

export default Header;
