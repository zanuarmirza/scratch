import React from "react";
import { Text as TextRN, TextProps } from "react-native";
import { Metrics } from "Themes";
import PropTypes from "prop-types";

/**
 *
 * @param {TextProps} props
 */
const Text = props => {
  let fontFamily = { fontFamily: "Nunito-Regular" };
  if (props.weight == "bold") {
    fontFamily = { fontFamily: "Nunito-Bold" };
  }
  return (
    <TextRN
      {...props}
      style={[
        {
          ...Metrics.text[props.size],
          ...props.style
        },
        fontFamily
      ]}
    >
      {props.children}
    </TextRN>
  );
};

Text.propTypes = {
  size: PropTypes.oneOf(["xlarge", "large", "medium", "small", "xsmall"]),
  weight: PropTypes.oneOf(["reguler", "bold"])
};

Text.defaultProps = {
  size: "small",
  weight: "reguler"
};
export default Text;
