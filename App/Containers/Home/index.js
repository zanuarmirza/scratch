import React, { Component } from "react";
import { View, Image, StatusBar } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Metrics, Images } from "Themes";
import { MessagesIcon, NotificationIcon, Card } from "./Components";

class Home extends Component {
  /**
   * Header Configuration
   */
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Image
        resizeMode="contain"
        source={Images.logo}
        style={{
          width: moderateScale(149),
          height: moderateScale(27)
        }}
      />
    ),
    headerRight: (
      <View style={{ flexDirection: "row" }}>
        <NotificationIcon />
        <MessagesIcon />
      </View>
    )
  });

  constructor(props) {
    super(props);
    this.state = { notification: 0, messages: 0 };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginHorizontal: Metrics.marginHorizontal,
            marginTop: moderateScale(20)
          }}
        />
      </View>
    );
  }
}

export default Home;
