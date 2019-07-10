import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "Components";
import { Images } from "Themes";

const NotificationIcon = props => (
  <TouchableOpacity onPress={props.onPress}>
    <Image source={Images.notificationIcon} />
  </TouchableOpacity>
);

export default NotificationIcon;
