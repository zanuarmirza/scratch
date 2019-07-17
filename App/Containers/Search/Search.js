import React, { Component } from "react";
import { View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Metrics } from "Themes";

class Search extends Component {
  render() {
    return (
      <View
        style={{
          marginHorizontal: moderateScale(Metrics.marginHorizontal)
        }}
      />
    );
  }
}

export default Search;
