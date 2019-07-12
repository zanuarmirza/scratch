import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Images } from "Themes";
import Home from "../Containers/Home/Home";
import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const HomeStackNavigation = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    // Default config for all screens
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
  tabBarLabel: "Search",
  tabBarAccessibilityLabel: "SearchNav",
  tabBarIcon: ({ focused }) => (
    <Image
      source={Images.searchIcon}
      resizeMode="contain"
      style={focused ? styles.tabActiveIcon : styles.tabInactiveIcon}
    />
  )
});

export default HomeStackNavigation;
