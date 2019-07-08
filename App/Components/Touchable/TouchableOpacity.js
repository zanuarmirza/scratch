import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity as TouchableOpacityRN } from "react-native";
import TouchableThrottle from "./TouchableThrottle";

const TouchableOpacity = props => {
  return (
    <TouchableThrottle
      render={({ onPressThrottled }) => {
        return (
          <TouchableOpacityRN
            activeOpacity={0.6}
            {...props}
            onPress={() => onPressThrottled(props.onPress)}
          >
            {props.children}
          </TouchableOpacityRN>
        );
      }}
    />
  );
};

TouchableOpacity.propTypes = {
  onPress: PropTypes.func.isRequired
};

export default TouchableOpacity;
