import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Images } from "Themes";
import Cooking from "../Containers/Cooking/Cooking";
import styles from "./Styles/NavigationStyles";
import tabBarOptions from "./TabBarOption";

// Manifest of possible screens
const CookingStackNavigation = createStackNavigator(
  {
    Cooking: { screen: Cooking }
  },
  {
    // Default config for all screens
    initialRouteName: "Cooking",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

CookingStackNavigation.navigationOptions = ({ navigation }) => ({
  header: null,
  headerVisible: false,
  headerMode: "screen",
  tabBarLabel: "Cooking",
  tabBarAccessibilityLabel: "CookingNav",
  tabBarIcon: ({ focused }) => (
    <Image
      source={Images.profileIcon}
      resizeMode="contain"
      style={focused ? styles.tabActiveIcon : styles.tabInactiveIcon}
    />
  ),
  tabBarOptions
});

export default CookingStackNavigation;
