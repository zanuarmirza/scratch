import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Images } from "Themes";
import Home from "../Containers/Home/Home";
import Cooking from "../Containers/Cooking/Cooking";
import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const HomeStackNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Cooking: { screen: Cooking }
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
  )
});

export default HomeStackNavigation;
