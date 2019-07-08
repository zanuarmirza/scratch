import React from "react";
import { Text as TextRN, TextProps } from "react-native";
import { Metrics } from "Themes";
import PropTypes from "prop-types";

/**
 *
 * @param {TextProps} props
 */
const Text = props => (
  <TextRN
    {...props}
    style={{
      fontFamily: "Nunito-Regular",
      ...Metrics.text.small,
      ...props.style
    }}
  >
    {props.children}
  </TextRN>
);

Text.propTypes = {
  size: PropTypes.oneOf(["xlarge", "large", "medium", "small", "xsmall"])
};

Text.defaultProps = {
  size: "small"
};
export default Text;
