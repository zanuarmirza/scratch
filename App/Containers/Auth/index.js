import React, { Component } from "react";
import { View } from "react-native";
import { Metrics } from "Themes";
import { moderateScale } from "react-native-size-matters";
import Header from "./Header";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";

// Styles
import styles from "../Styles/LaunchScreenStyles";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", loading: false };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header />
        <View
          style={{
            marginHorizontal: Metrics.marginHorizontal,
            marginTop: moderateScale(20)
          }}
        >
          <LoginForm
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
    );
  }
}

export default Auth;
