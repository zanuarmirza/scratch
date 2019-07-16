import React, { Component } from "react";
import { View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Metrics } from "Themes";
import Header from "./Components/Header";
import LoginForm from "./Components/LoginForm";
import SignUp from "./Components/SignUp";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", loading: false };
  }

  render() {
    return (
      <KeyboardAwareScrollView
        ref={ref => (this._scroll = ref)}
        showsVerticalScrollIndicator={false}
        resetScrollToCoords={{ x: 0, y: 0 }}
        onKeyboardWillHide={frames => this._scroll.scrollToPosition(0, 0)}
      >
        <View style={{ flex: 1 }}>
          <Header />
          <View
            style={{
              marginHorizontal: Metrics.marginHorizontal,
              marginTop: moderateScale(20)
            }}
          >
            <LoginForm
              navigation={this.props.navigation}
              credential={{
                email: this.state.email,
                password: this.state.password
              }}
            />
            <View
              style={{
                marginTop: moderateScale(30)
              }}
            >
              <SignUp />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Auth;
