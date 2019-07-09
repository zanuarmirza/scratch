import React from "react";
import { View, ImageBackground, Image } from "react-native";
import { Images, Metrics, Colors } from "Themes";
import { Text } from "Components";
import { moderateScale } from "react-native-size-matters";
import I18n from "../../I18n";
import * as lang from "../../I18n/languages/Type";

const Header = () => (
  <View style={{ height: moderateScale(250) }}>
    <ImageBackground
      source={Images.imageBgLogin}
      resizeMode="cover"
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <View
        style={{
          marginHorizontal: Metrics.marginHorizontal,
          marginTop: moderateScale(40)
        }}
      >
        <Image source={Images.logo} />
        <Text
          style={{
            color: Colors.dark_1,
            marginTop: moderateScale(50),
            fontWeight: "500",
            ...Metrics.text.xlarge
          }}
        >
          {I18n.t(lang.WELCOME)}
        </Text>
      </View>
    </ImageBackground>
  </View>
);

export default Header;
