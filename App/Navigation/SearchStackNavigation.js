import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Images } from "Themes";
import Home from "../Containers/Home";
import styles from "./Styles/NavigationStyles";
import tabBarOptions from "./TabBarOption";

// Manifest of possible screens
const HomeStackNavigation = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

HomeStackNavigation.navigationOptions = ({ navigation }) => ({
  header: null,
  headerVisible: false,
  headerMode: "screen",
  tabBarLabel: "Berbagi",
  tabBarAccessibilityLabel: "BerbagiNav",
  tabBarIcon: ({ focused }) => (
    <Image
      source={Images.likeIcon}
      resizeMode="contain"
      style={focused ? styles.tabActiveIcon : styles.tabInactiveIcon}
    />
  ),
  tabBarOptions
});

export default HomeStackNavigation;
