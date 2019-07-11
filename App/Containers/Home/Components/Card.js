import React from "react";
import { View, ImageBackground, Image } from "react-native";
import { Text, TouchableOpacity } from "Components";
import { Button } from "react-native-elements";
import { Images, Colors, Metrics } from "Themes";
import PropTypes from "prop-types";
import { moderateScale } from "react-native-size-matters";

const Card = ({
  imageBg,
  profileImage,
  name,
  time,
  title,
  content,
  like,
  comment
}) => {
  const formatTime = time => {
    return time;
  };

  return (
    <View
      style={{
        marginBottom: moderateScale(25),
        borderRadius: Metrics.borderRadius.big,
        overflow: "hidden"
      }}
    >
      <ImageBackground
        source={imageBg}
        resizeMode="cover"
        style={{
          height: moderateScale(220)
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            padding: moderateScale(13),
            backgroundColor: "rgba(255,255,255,0.9)",
            alignItems: "center"
          }}
        >
          <Image
            resizeMode="cover"
            source={profileImage}
            style={{
              borderRadius: moderateScale(45),
              marginRight: moderateScale(10),
              width: moderateScale(32),
              height: moderateScale(32)
            }}
          />
          <View>
            <Text size="xsmall">{name}</Text>
            <Text size="xsmall" style={{ color: Colors.dark_2 }}>
              {formatTime(time)}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          paddingHorizontal: moderateScale(16)
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: moderateScale(10)
          }}
        >
          <Text size="large" weight="bold" style={{ color: Colors.dark_1 }}>
            {title}
          </Text>
          <TouchableOpacity onPress={() => console.log("like")}>
            <Image source={Images.likeIcon} />
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: moderateScale(20) }}>
          <Text>{content}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between"
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginRight: moderateScale(10) }}>{like} Likes</Text>
          <Text style={{ marginRight: moderateScale(10), fontSize: 25 }}>
            .
          </Text>
          <Text style={{ marginRight: moderateScale(10) }}>
            {comment} Comments
          </Text>
        </View>
        <View
          style={{ alignSelf: "flex-end", marginBottom: moderateScale(10) }}
        >
          <Button
            type="outline"
            title="+ Save"
            titleStyle={{ color: Colors.primary }}
            containerStyle={{
              overflow: "hidden",
              alignItems: "center"
            }}
            buttonStyle={{
              borderColor: Colors.primary,
              borderWidth: 1,
              height: moderateScale(30),
              width: moderateScale(70),
              borderRadius: Metrics.borderRadius.small
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
