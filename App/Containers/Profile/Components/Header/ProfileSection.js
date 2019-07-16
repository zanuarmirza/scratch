import React from "react";
import { Image, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Text } from "Components";
import { Images } from "Themes";
import { NumberLib } from "Lib";
import I18n from "I18n";
import * as lang from "I18n/languages/Type";

const ProfileSection = props => {
  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <Image
        resizeMode="cover"
        source={Images.dummyProfile_1}
        style={{ width: 80, height: 80, borderRadius: 40 }}
      />
      <View style={{ flex: 1, marginLeft: moderateScale(15) }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text weight="bold" size="medium">
            {props.profile.name}
          </Text>
          <Image
            resizeMode="contain"
            source={Images.pencilIcon}
            style={{ width: 17, height: 17 }}
          />
        </View>
        <Text>{props.profile.alterName}</Text>
        <View
          style={{
            marginTop: moderateScale(11),
            flex: 1,
            flexDirection: "row"
          }}
        >
          <Text>
            {`${NumberLib.thousandAcronym(props.profile.followers)} ${I18n.t(
              lang.FOLLOWERS
            )}`}
          </Text>
          <Text style={{ marginHorizontal: moderateScale(10), fontSize: 25 }}>
            .
          </Text>
          <Text>
            {`${NumberLib.thousandAcronym(props.profile.likes)} ${I18n.t(
              lang.LIKES
            )}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileSection;
