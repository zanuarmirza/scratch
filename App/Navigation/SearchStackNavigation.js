import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Images } from "Themes";
import Search from "../Containers/Home/Home";
import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const SearchStackNavigation = createStackNavigator(
  {
    Search: { screen: Search }
  },
  {
    // Default config for all screens
    initialRouteName: "Search",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

SearchStackNavigation.navigationOptions = ({ navigation }) => ({
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

export default SearchStackNavigation;
