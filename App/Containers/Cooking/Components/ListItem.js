import React from "react";
import { View, Image } from "react-native";
import { Text, TouchableOpacity } from "Components";
import { moderateScale } from "react-native-size-matters";

const ListItem = props => (
  <TouchableOpacity onPress={() => console.log("click")}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: moderateScale(15)
      }}
    >
      <Image
        source={props.image}
        resizeMode="cover"
        style={{
          borderRadius: moderateScale(49) / 2,
          marginRight: moderateScale(10),
          width: moderateScale(49),
          height: moderateScale(49)
        }}
      />
      <Text> {props.content} </Text>
    </View>
  </TouchableOpacity>
);

export default ListItem;
