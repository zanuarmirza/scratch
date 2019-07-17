import { ShadowView, Text } from "Components";
import React from "react";
import { Image } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Images } from "Themes";

const ListItem = props => (
  <ShadowView width={160} height={152} padding={20} offsetx={5} elevation={5}>
    <Image
      source={Images.dummyImageContent_1}
      resizeMode="cover"
      style={{
        width: 160,
        height: 99
      }}
    />
    <Text
      style={{
        alignSelf: "center",
        textAlign: "center",
        paddingVertical: moderateScale(4)
      }}
    >
      Sweet
    </Text>
  </ShadowView>
);

export default ListItem;
