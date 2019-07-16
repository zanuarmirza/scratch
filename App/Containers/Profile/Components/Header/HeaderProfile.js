import { Text } from "Components";
import React from "react";
import { Image, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Colors, Images } from "Themes";
import I18n from "I18n";
import * as lang from "I18n/languages/Type";

const HeaderProfile = () => (
  <View
    style={{
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    <Text weight="bold" size="xlarge" style={{ color: Colors.dark_1 }}>
      {I18n.t(lang.MYKITCHEN)}
    </Text>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        resizeMode="contain"
        source={Images.settingIcon}
        style={{ width: 17, height: 17 }}
      />
      <Text style={{ marginLeft: moderateScale(7) }}>
        {I18n.t(lang.SETTINGS)}
      </Text>
    </View>
  </View>
);

export default HeaderProfile;
