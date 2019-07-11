import React from "react";
import { View, Image } from "react-native";
import { Text, TouchableOpacity } from "Components";
import { moderateScale } from "react-native-size-matters";

const ListItem = props => (
  <TouchableOpacity>
    <View style={{ flexDirection: "row" }}>
      <Image
        source={props.image}
        resizeMode="cover"
        style={{
          borderRadius: moderateScale(60),
          marginRight: moderateScale(10),
          width: moderateScale(60),
          height: moderateScale(60)
        }}
      />
      <Text> {props.content} </Text>
    </View>
  </TouchableOpacity>
);

export default ListItem;
