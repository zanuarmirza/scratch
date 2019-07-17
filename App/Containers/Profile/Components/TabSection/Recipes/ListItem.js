import React from "react";
import { View, Image } from "react-native";
import { Text, TouchableOpacity } from "Components";
import { moderateScale } from "react-native-size-matters";
import { Metrics, Colors } from "Themes";

const ListItem = props => (
  <TouchableOpacity
    style={{
      overflow: "hidden",
      borderRadius: Metrics.borderRadius.big,
      elevation: 5
    }}
    onPress={() => console.log("click")}
  >
    <View
      style={{
        width: moderateScale(154),
        height: moderateScale(131),
        backgroundColor: Colors.white
      }}
    >
      <Image
        source={props.image}
        resizeMode="cover"
        style={{
          width: moderateScale(154),
          height: moderateScale(99)
        }}
      />
      <Text
        style={{
          alignSelf: "center",
          paddingVertical: moderateScale(4)
        }}
      >
        {props.name}
      </Text>
    </View>
  </TouchableOpacity>
);

export default ListItem;
