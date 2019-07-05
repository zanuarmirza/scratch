import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import LoginForm from './LoginForm';
import SignUp from './SignUp';

// Styles
import styles from '../Styles/LaunchScreenStyles';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', loading: false };
  }

  render() {
    return (
      <View style={styles.mainContainer}>

        <LoginForm credential={{ email: this.state.email, password: this.state.password }} />

      </View>
    );
  }
}

export default Auth;
