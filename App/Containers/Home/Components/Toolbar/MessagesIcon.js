import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "Components";
import { Images } from "Themes";

const MessagesIcon = props => (
  <TouchableOpacity onPress={props.onPress}>
    <Image source={Images.messageIcon} />
  </TouchableOpacity>
);

export default MessagesIcon;
