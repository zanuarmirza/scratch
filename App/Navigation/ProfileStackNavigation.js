import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Images } from "Themes";
import Profile from "../Containers/Home/Home";
import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const CookingStackNavigation = createStackNavigator(
  {
    Profile: { screen: Profile }
  },
  {
    // Default config for all screens
    initialRouteName: "Profile",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

CookingStackNavigation.navigationOptions = ({ navigation }) => ({
  header: null,
  headerVisible: false,
  headerMode: "screen",
  tabBarLabel: "Profile",
  tabBarAccessibilityLabel: "ProfileNav",
  tabBarIcon: ({ focused }) => (
    <Image
      source={Images.profileIcon}
      resizeMode="contain"
      style={focused ? styles.tabActiveIcon : styles.tabInactiveIcon}
    />
  )
});

export default CookingStackNavigation;
