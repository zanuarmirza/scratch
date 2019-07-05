import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { moderateScale } from 'react-native-size-matters';
import { InputText } from 'Components';
import I18n from '../../I18n';
import * as lang from '../../I18n/languages/Type';
import Colors from '../../Themes/Colors';
import Metric from '../../Themes/Metrics';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { error_email: false, error_password: false };
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: moderateScale(47) }}>
          <Text style={{ color: Colors.dark_2, ...Metric.text.small }}>{I18n.t(lang.LOGIN_TO_CONTINUE)}</Text>
        </View>
        <View style={{ marginBottom: moderateScale(30) }}>
          <InputText
            label={I18n.t(lang.INPUT_EMAIL_LABEL)}
            labelStyle={{ color: Colors.dark_2, ...Metric.text.small }}
          />
        </View>
        <View>
          <View style={{ position: 'absolute', right: 10 }}>
            <Text style={{ color: Colors.dark_2, ...Metric.text.small, textAlign: 'right' }}>{I18n.t(lang.FORGET_PASSWORD)}</Text>
          </View>
          <View style={{ marginBottom: moderateScale(30) }}>
            <InputText
              secureTextEntry
              label={I18n.t(lang.INPUT_PASSWORD_LABEL)}
              labelStyle={{ color: Colors.dark_2, ...Metric.text.small }}
            />
          </View>
        </View>
        <Button buttonStyle={{ backgroundColor: Colors.primary, borderRadius: Metric.buttonRadius }} titleStyle={{ color: Colors.white }} title={I18n.t(lang.LOGIN)} />
      </View>
    );
  }
}

export default LoginForm;
