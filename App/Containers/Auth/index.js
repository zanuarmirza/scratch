import React, { Component } from "react";
import { View } from "react-native";
import { Metrics } from "Themes";
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
        {/* <Header/> */}
        <View style={{ marginHorizontal: Metrics.marginHorizontal }}>
          <LoginForm
            credential={{
              email: this.state.email,
              password: this.state.password
            }}
          />
          <SignUp />
        </View>
      </View>
    );
  }
}

export default Auth;
