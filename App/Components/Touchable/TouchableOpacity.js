import React from "react";
import PropTypes from "prop-types";
import {
  TouchableOpacity as TouchableOpacityRN,
  TouchableOpacityProps
} from "react-native";
import TouchableThrottle from "./TouchableThrottle";

/**
 *
 * @param {TouchableOpacityProps} props
 */
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
