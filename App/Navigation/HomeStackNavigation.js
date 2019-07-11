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
    initialRouteName: "Home",
    defaultNavigationOptions: () => ({
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle
    })
  }
);

HomeStackNavigation.navigationOptions = ({ navigation }) => ({
  header: null,
  headerVisible: false,
  headerMode: "screen",
  tabBarLabel: "Home",
  tabBarAccessibilityLabel: "HomeNav",
  tabBarIcon: ({ focused }) => (
    <Image
      source={Images.exploreIcon}
      resizeMode="contain"
      style={focused ? styles.tabActiveIcon : styles.tabInactiveIcon}
    />
  ),
  tabBarOptions
});

export default HomeStackNavigation;
