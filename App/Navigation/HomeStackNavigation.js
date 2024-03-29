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
    Home: {
      screen: Home,
      navigationOptions: {
        gesturesEnabled: true
      }
    },
    Cooking: {
      screen: Cooking,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    // Default config for all screens
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle
    })
  }
);

HomeStackNavigation.navigationOptions = ({ navigation }) => {
  return {
    header: null,
    headerVisible: false,
    tabBarLabel: "Home",
    headerMode: "none",
    mode: "modal",
    transparentCard: true,
    cardStyle: { opacity: 1 },
    tabBarAccessibilityLabel: "HomeNav",
    swipeEnabled: () => {
      return navigation.state.index == 0;
    },
    tabBarIcon: ({ focused }) => (
      <Image
        source={Images.exploreIcon}
        resizeMode="contain"
        style={focused ? styles.tabActiveIcon : styles.tabInactiveIcon}
      />
    )
  };
};

export default HomeStackNavigation;
