import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { connect } from "react-redux";
import { Colors } from "Themes";
import ReduxNavigation from "../Navigation/ReduxNavigation";
import StartupActions from "../Redux/StartupRedux";
import ReduxPersist from "../Config/ReduxPersist";

class RootContainer extends Component {
  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup();
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <ReduxNavigation />
      </View>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup())
});

export default connect(
  null,
  mapDispatchToProps
)(RootContainer);
