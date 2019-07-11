import { InputText, Text, TouchableOpacity } from "Components";
import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { moderateScale } from "react-native-size-matters";
import { Colors, Metrics } from "Themes";
import I18n from "../../../I18n";
import * as lang from "../../../I18n/languages/Type";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { error_email: false, error_password: false };
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: moderateScale(40) }}>
          <Text style={{ color: Colors.dark_2, ...Metrics.text.small }}>
            {I18n.t(lang.LOGIN_TO_CONTINUE)}
          </Text>
        </View>
        <InputText label={I18n.t(lang.INPUT_EMAIL_LABEL)} />
        <View>
          <View style={{ position: "absolute", right: 10, zIndex: 2 }}>
            <TouchableOpacity onPress={() => console.log("clicked22")}>
              <Text
                style={{
                  color: Colors.dark_2,
                  ...Metrics.text.small,
                  textAlign: "right"
                }}
              >
                {I18n.t(lang.FORGET_PASSWORD)}
              </Text>
            </TouchableOpacity>
          </View>

          <InputText
            secureTextEntry
            label={I18n.t(lang.INPUT_PASSWORD_LABEL)}
          />
        </View>
        <Button
          onPress={() => this.props.navigation.navigate("Home")}
          buttonStyle={{
            backgroundColor: Colors.primary,
            borderRadius: Metrics.borderRadius.big,
            height: Metrics.button.height.normal
          }}
          titleStyle={{ color: Colors.white, ...Metrics.text.medium }}
          title={I18n.t(lang.LOGIN)}
        />
      </View>
    );
  }
}

export default LoginForm;
