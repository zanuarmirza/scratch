import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, InputText } from "Components";
import { Button } from "react-native-elements";
import { moderateScale } from "react-native-size-matters";

import I18n from "../../I18n";
import * as lang from "../../I18n/languages/Type";
import Colors from "../../Themes/Colors";
import Metric from "../../Themes/Metrics";

const SignUp = () => (
  <View style={{ justifyContent: "center" }}>
    <Text
      style={{
        textAlign: "center",
        color: Colors.dark_2,
        ...Metric.text.small
      }}
    >
      {I18n.t(lang.SIGN_UP_QUESTION)}
    </Text>
    <Text
      style={{
        textAlign: "center",
        color: Colors.primary,
        ...Metric.text.medium
      }}
    >
      {I18n.t(lang.WELCOME_SIGN_UP)}
    </Text>
  </View>
);

export default SignUp;
