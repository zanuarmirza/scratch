import React from "react";
import { View, ImageBackground } from "react-native";
import { Text } from "Components";
import { Button } from "react-native-elements";
import { Metrics } from "Themes";
import PropTypes from "prop-types";

const Card = props => {
  return (
    <View>
      <ImageBackground source={props.imageBg}>
        {/* Header */}
        <View>{props.header}</View>
      </ImageBackground>
      <View>
        <Text>{props.title}</Text>
        {/* Icon */}
      </View>
      <View>{props.body}</View>
      <View>
        <Text>{props.title}</Text>
        <Text>{props.title}</Text>
        <Button>+ Save</Button>
      </View>
    </View>
  );
};

export default Card;
