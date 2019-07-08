import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight as TouchableHighlightRN } from "react-native";
import TouchableThrottle from "./TouchableThrottle";

const TouchableHighlight = props => {
  return (
    <TouchableThrottle
      render={({ onPressThrottled }) => {
        return (
          <TouchableHighlightRN
            {...props}
            onPress={() => onPressThrottled(props.onPress)}
          >
            {props.children}
          </TouchableHighlightRN>
        );
      }}
    />
  );
};

TouchableHighlight.propTypes = {
  onPress: PropTypes.func.isRequired
};

export default TouchableHighlight;
